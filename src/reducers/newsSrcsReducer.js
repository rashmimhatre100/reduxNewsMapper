const newsSrcsReducer = (state = {
	newsSrc : [],
    loading : true,
    error   : null
}, action) => {
	switch (action.type) {
		case 'SET_SOURCES' :
				return state = {
					...state,
					newsSrc : action.payload.sources,
					loading : false,
				};
			break;
    }
    return state;
}

export default newsSrcsReducer;