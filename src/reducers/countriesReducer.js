import { countries } from "country-flags-svg";

const countriesReducer = (state = {
	countries : countries,
}, action) => {
	// console.log('countriesReducer: ',state);
	return state;
}

export default countriesReducer;