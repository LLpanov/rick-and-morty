import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { ICharacter, ICharactersResponse, IInfo } from '../../interfaces';
import { charactersService } from '../../services';

interface IChartersState {
	characters: ICharacter[];
	currentPage: number;
	error: null | string;
	status: null | 'fulfilled' | 'pending' | 'rejected';
	info: IInfo;
}

const initialState: IChartersState = {
	characters: [],
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

export const getAllCharacters = createAsyncThunk('characters/getAllCharacters', async (page: number, { rejectWithValue }) => {
	try {
		const { data }: { data: ICharactersResponse } = await charactersService.getCharacters(page);
		const { info, results } = data;
		console.log(data);
		return { info, results };
	} catch (e: any) {
		return rejectWithValue(e.message as string);
	}
});

export const charactersSlice = createSlice({
	name: 'characters',
	initialState,
	reducers: {
		setCurrentPageCharacter: (state, action: PayloadAction<number>) => {
			state.currentPage = action.payload;
		}
	},
	extraReducers: builder => {
		builder
			.addCase(getAllCharacters.pending, state => {
				state.status = 'pending';
				state.error = null;
			})
			.addCase(getAllCharacters.fulfilled, (state, action: PayloadAction<{ info: IInfo; results: ICharacter[] }>) => {
				state.status = 'fulfilled';
				state.characters = action.payload.results;
				state.info = action.payload.info;
			})

			.addCase(getAllCharacters.rejected, (state, action: PayloadAction<string | any>) => {
				state.status = 'rejected';
				state.error = action.payload;
			});
	}
});
export const { setCurrentPageCharacter } = charactersSlice.actions;
const charactersReducer = charactersSlice.reducer;
export { charactersReducer };
