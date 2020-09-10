import { applyMiddleware, compose, createStore, Reducer, Action } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { persistReducer, persistStore } from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';

import rootReducer from './reducer';

const persistConfig = {
	key: 'root',
	storage: AsyncStorage,
	blacklist: [],
};

const createdStore = (rootReducer: Reducer<any, Action<any>>) => {
	const middleware = [];
	const enhancers = [];

	middleware.push(thunk);
	middleware.push(logger);

	enhancers.push(applyMiddleware(...middleware));

	// Redux persist
	const persistedReducer = persistReducer(persistConfig, rootReducer);

	const store = createStore(persistedReducer, compose(...enhancers));
	const persistor = persistStore(store);

	return { store, persistor };
};

const Store = createdStore(rootReducer);
export const store = Store.store;
export const persistor = Store.persistor;
