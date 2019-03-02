import React from 'react';
import { render } from 'react-dom';
import App from './containers/App.js';
import { Provider } from 'react-redux';
import store from './store';



// const myLogger = (store) => (next) => (action) =>{
// 	// console.log(action);
// 	next(action);
// };



// store.subscribe(() =>{
// 	// console.log('state updated=>',store.getState());
// });

render(
    <Provider store={store}>
    	<App />
	</Provider>,
	document.getElementById('app')
);

