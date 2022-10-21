import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	photo: "",
};

const profileSlice = createSlice({
	name: "profile",
	initialState,
	reducers: {
		addPhoto: (state, action) => {
			state.photo = action.payload.photo;
		},
	},
});

export const { addPhoto } = profileSlice.actions;

export const savePhoto = (photo) => {
	return async (dispatch) => {
		try {
			dispatch(addPhoto({ photo }));
		} catch (error) {
			throw error;
		}
	};
};

export default profileSlice.reducer;
