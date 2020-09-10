import { combineReducers } from 'redux';

import data from './data/data.reducer';

const rootReducer = combineReducers({
	data,
});

export default rootReducer;