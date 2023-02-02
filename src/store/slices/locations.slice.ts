import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { IInfo, ILocation, ILocationsResponse } from '../../interfaces';
import { locationsService } from '../../services';

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
export const getAllLocations = createAsyncThunk('location/getAllLocations', async (page: number, { rejectWithValue }) => {
	try {
		const { data }: { data: ILocationsResponse } = await locationsService.getLocation(page);
		const { info, results } = data;
		return { info, results };
	} catch (e: any) {
		return rejectWithValue(e.message as string);
	}
});
export const locationSlice = createSlice({
	name: 'location',
	initialState,
	reducers: {
		setCurrentLocationPage: (state, action: PayloadAction<number>) => {
			state.currentPage = action.payload;
		}
	},
	extraReducers: builder => {
		builder
			.addCase(getAllLocations.pending, state => {
				state.status = 'pending';
				state.error = null;
			})
			.addCase(getAllLocations.fulfilled, (state, action: PayloadAction<{ info: IInfo; results: ILocation[] }>) => {
				state.status = 'fulfilled';
				state.locations = action.payload.results;
				state.info = action.payload.info;
				state.error = null;
			});
	}
});
export const { setCurrentLocationPage } = locationSlice.actions;
const locationsReducer = locationSlice.reducer;
export { locationsReducer };
