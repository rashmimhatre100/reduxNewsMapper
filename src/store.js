import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import math from "./reducers/mathReducer";
import user from "./reducers/userReducer";
import countries from "./reducers/countriesReducer";
import newsSrcs from "./reducers/newsSrcsReducer";
import news from "./reducers/newsReducer";
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';

export default createStore( 
							combineReducers( { math ,user ,countries ,newsSrcs, news } ), 
							{}, 
							applyMiddleware(logger, thunk, promise) 
						) ;