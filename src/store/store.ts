import { combineReducers, configureStore } from '@reduxjs/toolkit';

import { episodesReducer } from './slices';

const rootReducer = combineReducers({
	episodesReducer
});

export const setupStore = () => {
	return configureStore({
		reducer: rootReducer
	});
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
