const newsReducer = (state = {
	news : [],
	country : '',
	newsSrc : '',
	newsSrcName : '',
}, action) => {
	switch (action.type) {
		case 'GET_NEWS' :
			state = {
				...state,
				news : action.payload.news,
				country : action.payload.country,
				newsSrc : action.payload.newsSrc,
				newsSrcName : action.payload.newsSrcName,
			};
			break;
	}
	return state;
}

export default newsReducer;