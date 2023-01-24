import { createSlice } from '@reduxjs/toolkit';

import { IInfo, ILocation } from '../../interfaces';

interface ILocationsState {
	locations: ILocation[];
	currentPage: number;
	error: null | string;
	status: null | 'fulfilled' | 'pending' | 'rejected';
	info: IInfo;
}

const initialState: ILocationsState = {
	locations: [],
	currentPage: 1,
	error: null,
	status: null,
	info: {
		count: 0,
		pages: 0,
		next: '',
		prev: null
	}
};
export const locationSlice = createSlice({
	name: 'location',
	initialState,
	reducers: {}
});

const locationsReducer = locationSlice.reducer;
export { locationsReducer };
