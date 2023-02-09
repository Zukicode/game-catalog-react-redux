import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { optionsFetch } from '../../api/api';

export const fetchGames = createAsyncThunk(
	'game/fetchGames',
	async function (page) {
		const response = await fetch(
			`https://opencritic-api.p.rapidapi.com/game?platforms=ps4%2Cps5&skip=${page}`,
			optionsFetch()
		);
		const data = await response.json();
		return data;
	}
);

export const fetchGamesForSearch = createAsyncThunk(
	'game/fetchGamesForSearch',
	async function (search, { dispatch }) {
		const response = await fetch(
			`https://opencritic-api.p.rapidapi.com/game/search?criteria=${search}`,
			optionsFetch()
		);
		const data = await response.json();
		dispatch(setGameSearch(data));
	}
);

const initialState = {
	games: [],
	catalog: [],
	status: 'loading',
	search: '',
	pageSkip: 0,
};

export const gameSlice = createSlice({
	name: 'game',
	initialState,
	reducers: {
		setGames(state, action) {
			state.games = action.payload;
		},
		setSearch(state, action) {
			state.search = action.payload;
		},
		setGameSearch(state, action) {
			state.games = action.payload;
		},
		setCatalog(state, action) {
			state.catalog.find(obj => {
				if (obj.id === action.payload.id) {
					const deleteItem = state.catalog.filter(
						obj => obj.id !== action.payload.id
					);
					state.catalog = deleteItem;
				}
			});
			state.catalog = [...state.catalog, action.payload];
		},
		removeFromCatalog(state, action) {
			const findItem = state.catalog.find(obj => obj.id === action.payload);
			const deleteItem = state.catalog.filter(obj => obj.id !== findItem.id);
			state.catalog = deleteItem;
			localStorage.setItem('catalog', JSON.stringify(state.catalog));
		},
		setCatalogFromLocalStorage(state, action) {
			state.catalog = action.payload;
		},
		setPageSkip(state, action) {
			if (state.pageSkip <= 0) {
				state.pageSkip = 20;
			}

			state.pageSkip = state.pageSkip + action.payload;
		},
	},
	extraReducers: {
		[fetchGames.pending]: state => {
			state.status = 'loading';
		},
		[fetchGames.fulfilled]: (state, action) => {
			state.games = action.payload;
			state.status = 'succses';
		},
		[fetchGames.rejected]: state => {
			state.status = 'failed';
		},
	},
});

export const {
	setGames,
	setCatalogFromLocalStorage,
	setSearch,
	setGameSearch,
	setPageSkip,
	setCatalog,
	removeFromCatalog,
} = gameSlice.actions;

export default gameSlice.reducer;
