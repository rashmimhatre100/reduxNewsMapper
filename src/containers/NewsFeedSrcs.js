import React from 'react';

export default class NewsFeedSrcs extends React.Component {

  render() {
    // console.log('NewsFeedSrcs=>',this.props.newsSrcs);
    return (
      <div className="col-lg-2 col-md-2 col-sm-4 col-xs-4 innerWraper" 
           style={{height:screen.height+'px'}}>
          { this.props.newsSrcs.newsSrc.map( (src,index)=>{
            return(
              <div key={index} 
                   className="col-lg-12 row dataRow"
                   onClick={()=> this.props.getSrcNews({'countryName' : '', 'newsSrc' : src.id, 'newsSrcName' : src.name})}>
                <div className="col-lg-12">{src.name}</div>
              </div>
              );
            }) 
          }
      </div>
    );
  }
}

