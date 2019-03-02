const NewsAPI = require('newsapi');
const newsapi = new NewsAPI('24961e15a5ae49228bdac922186ca8d1');
// import { countries } from "country-flags-svg";

export function setName(name){
	// return dispatch => {
	// 	setTimeout(()=>{
	// 		dispatch({
	// 					type : 'SET_NAME',
	// 					payload : name,
	// 				});
	// 	},2000);
	// };

	// newsapi.v2.topHeadlines({
	//   q: 'trump',
	//   category: 'politics',
	//   language: 'en',
	//   country: 'us'
	// }).then(response => {
	//   console.log(response);
	//   /*
	//     {
	//       status: "ok",
	//       articles: [...]
	//     }
	//   */
	// });

	return {    type    : 'SET_NAME',
				payload : new Promise((resolve, reject)=>{
							setTimeout(()=>{


							// console.log('countries:=>',countries);
							newsapi.v2.everything({
							  q: 'india',
							  sources: 'bbc-news,the-verge',
							  domains: 'bbc.co.uk,techcrunch.com',
							  // from: '2017-12-01',
							  // to: '2017-12-12',
							  language: 'en',
							  sortBy: 'relevancy',
							  page: 2
							}).then(response => {
							  console.log('NEWS=>', response);
							  /*
							    {
							      status: "ok",
							      articles: [...]
							    }
							  */
							});

							// To query sources:
							newsapi.sources({
							  // category: 'technology', // optional
							  // language: 'en', // optional
							  // country: 'us' // optional
							}).then(sourcesResponse => {
							  console.log('sourcesResponse=>',sourcesResponse);
							  /*
							    {
							      status: "ok",
							      sources: [...]
							    }
							  */
							});


								resolve(name);
							},2000);
				        }),
			};
}

export function setAge(age){
	return{
		type : 'SET_AGE',
		payload : age,
	};
}