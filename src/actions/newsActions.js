export function getNews(news, country, newsSrc, newsSrcName){

	return {    type    : 'GET_NEWS',
				payload : { news, country, newsSrc, newsSrcName },
			};
}
