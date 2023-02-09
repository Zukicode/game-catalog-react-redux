import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { optionsFetch } from '../../api/api';

export const fetchGamesById = createAsyncThunk(
	'game/fetchGamesById',
	async function (id) {
		const response = await fetch(
			`https://opencritic-api.p.rapidapi.com/game/${id}`,
			optionsFetch()
		);
		const data = await response.json();
		return data;
	}
);

const initialState = {
	detalies: {},
	status: 'loading',
};

export const gameDetalies = createSlice({
	name: 'detalies',
	initialState,
	reducers: {
		setDetalies(state, action) {
			state.detalies = action.payload;
		},
	},
	extraReducers: {
		[fetchGamesById.pending]: state => {
			state.status = 'loading';
		},
		[fetchGamesById.fulfilled]: (state, action) => {
			state.detalies = action.payload;
			state.status = 'succses';
		},
		[fetchGamesById.rejected]: state => {
			state.status = 'failed';
		},
	},
});

export const { setDetalies } = gameDetalies.actions;

export default gameDetalies.reducer;
