import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";

import profileReducer from "./profile.slice";

export const store = configureStore({
	reducer: {
		profile: profileReducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: false,
		}),
});
