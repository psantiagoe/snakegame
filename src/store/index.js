import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";

import gameSlice from "./game.slice";
import profileReducer from "./profile.slice";
import scoreboardSlice from "./scoreboard.slice";

export const store = configureStore({
	reducer: {
		profile: profileReducer,
		scoreBoard: scoreboardSlice,
		game: gameSlice,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: false,
		}),
});
