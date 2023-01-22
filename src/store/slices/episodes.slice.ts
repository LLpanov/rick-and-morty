import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { IEpisode, IEpisodeResponse, IInfo } from '../../interfaces';
import { episodesService } from '../../services';

interface IEpisodesState {
	episodes: IEpisode[];
	currentPage: number;
	error: null | string;
	status: null | 'fulfilled' | 'pending' | 'rejected';
	info: IInfo;
}

const initialState: IEpisodesState = {
	episodes: [],
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
//
export const getAllEpisodes = createAsyncThunk('episodes/getAllEpisodes', async (page: number, { rejectWithValue }) => {
	try {
		const { data }: { data: IEpisodeResponse } = await episodesService.getAll(page);
		const { info, results } = data;
		return { info, results };
	} catch (err: any) {
		return rejectWithValue(err.message as string);
	}
});

export const episodesSlice = createSlice({
	name: 'episodes',
	initialState,
	reducers: {
		setCurrentPage: (state, action: PayloadAction<number>) => {
			state.currentPage = action.payload;
		}
	},
	extraReducers: builder => {
		builder
			.addCase(getAllEpisodes.pending, state => {
				state.status = 'pending';
				state.error = null;
			})
			.addCase(getAllEpisodes.fulfilled, (state, action: PayloadAction<{ info: IInfo; results: IEpisode[] }>) => {
				state.status = 'fulfilled';
				state.episodes = action.payload.results;
				state.info = action.payload.info;
			})

			.addCase(getAllEpisodes.rejected, (state, action: PayloadAction<string | any>) => {
				state.status = 'rejected';
				state.error = action.payload;
			});
	}
});
export const { setCurrentPage } = episodesSlice.actions;
const episodesReducer = episodesSlice.reducer;
export { episodesReducer };
