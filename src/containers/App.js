import React from 'react';
import { Button } from 'react-bootstrap';
import { User } from '../components/User';
import { Main } from '../components/Main';
import Countries from './Countries';
import NewsFeedSrcs from './NewsFeedSrcs';
import NewsFeed from './NewsFeed';
import { connect } from 'react-redux';
import { setName } from "../actions/userActions";
import { getNewsSrcs } from "../actions/newsSrcsActions";
import { getNews } from "../actions/newsActions";
const NewsAPI = require('newsapi');
const newsapi = new NewsAPI('xyz');

class App extends React.Component {

  componentDidMount() {
      this.props.getNewsSrcs();
  }

  render() {
    return (
      <div className="container-fluid" >
        <div className="row" >
  {/*        <Main changeUsername={()=> {this.props.setName('Anna')}}/>
          <User username={this.props.user.name}/>*/}
          <Countries countries={this.props.countries} getCountryNews={(news)=> {this.props.getNews(news)}}/>
          <NewsFeedSrcs newsSrcs={this.props.newsSrcs} getSrcNews={(news)=> {this.props.getNews(news)}}/>
          <NewsFeed news={this.props.news}/>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user      : state.user,
    math      : state.math,
    countries : state.countries,
    newsSrcs  : state.newsSrcs,
    news      : state.news,
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    'setName' : (name) =>{
      dispatch(setName(name));
    },

    'getNewsSrcs' : () =>{
      newsapi.sources({
      }).then(sourcesResponse => {
         // console.log('sourcesResponse=>',sourcesResponse);
         dispatch(getNewsSrcs(sourcesResponse));
      });
    },

    'getNews' : (data) =>{
      newsapi.v2.everything({
        q: data.countryName,
        sources: data.newsSrc,
        // domains: 'bbc.co.uk,techcrunch.com',
        language: 'en',
        sortBy: 'relevancy',
        page: 2
      }).then(response => {
        // console.log('response: ',response);
        dispatch(getNews(response.articles, data.countryName, data.newsSrc, data.newsSrcName));
      });
    },

  };
}

export default connect( mapStateToProps, mapDispatchToProps )(App);