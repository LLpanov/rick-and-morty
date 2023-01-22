import { combineReducers, configureStore } from '@reduxjs/toolkit';

import { charactersReducer, episodesReducer } from './slices';

const rootReducer = combineReducers({
	episodesReducer,
	charactersReducer
});

export const setupStore = () => {
	return configureStore({
		reducer: rootReducer
	});
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
