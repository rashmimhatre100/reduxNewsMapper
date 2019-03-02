import React from 'react';

export default class NewsFeed extends React.Component {

  render() {
    // console.log('NewsFeed=>',this.props.news.news);
    return (
      <div className="col-lg-8 col-md-2 col-sm-4 col-xs-4 newsFeedContainer" style={{height:screen.height+'px'}}>
          <div className="col-lg-12 newsFeedTitle">BREAKING NEWS { this.props.news.country ? "("+this.props.news.country+")" : this.props.news.newsSrc ? "("+this.props.news.newsSrcName+")" : null } </div>
          { this.props.news.news.map( (news,index)=>{
            return(
              <div key={index} className="col-lg-12 row newsWrapperRows">
                <div className="col-lg-4"><img className="img-responsive newsRelatedImg" src={news.urlToImage}/></div>
                
                <div className="col-lg-8">
                  <div className="col-lg-12 newsHeading"><b>{news.title}</b></div>
                  <div className="col-lg-12 newsContent">{news.content}</div>
                  <div className="col-lg-12"><a href={news.url} target="_blank">Read More at {news.source.name}...</a></div>
                  <div className="col-lg-12 newsPublishOn">Published On {moment(news.publishedAt).format('LLLL')}</div>
              </div>
              </div>
              );
            }) 
          }
      </div>
    );
  }
}
