import { configureStore } from '@reduxjs/toolkit';
import gameSlice from './games/gameSlice';
import gameDetalies from './gameDetalies/gameDetalies';

export const store = configureStore({
	reducer: {
		game: gameSlice,
		detalies: gameDetalies,
	},
});
