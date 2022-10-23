import { getProfile, insertProfile } from "../db";

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	photo: "",
	userName: "",
};

const profileSlice = createSlice({
	name: "profile",
	initialState,
	reducers: {
		editProfile: (state, action) => {
			state.id = action.payload.id.toString();
			state.photo = action.payload.photo;
			state.userName = action.payload.userName;
		},
		setProfile: (state, action) => {
			state.photo = action.payload[0].image;
			state.userName = action.payload[0].username;
		},
	},
});

export const { editProfile, setProfile } = profileSlice.actions;

export const saveProfile = (photo, userName) => {
	return async (dispatch) => {
		try {
			const result = await insertProfile(userName, photo);
			dispatch(editProfile({ id: result.insertId, photo, userName }));
		} catch (error) {
			throw error;
		}
	};
};

export const loadProfile = () => {
	return async (dispatch) => {
		try {
			const result = await getProfile();
			dispatch(setProfile(result?.rows._array));
		} catch (error) {
			throw error;
		}
	};
};

export default profileSlice.reducer;
