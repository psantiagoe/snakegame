import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	score: 0,
	time: 0,
};

const gameSlice = createSlice({
	name: "profile",
	initialState,
	reducers: {
		editScore: (state, action) => {
			state.score = action.payload.score;
		},
		editTime: (state, action) => {
			state.time = action.payload.time;
		},
	},
});

export const { editScore, editTime } = gameSlice.actions;

export const updateScore = (score) => {
	return async (dispatch) => {
		try {
			dispatch(editScore({ score }));
		} catch (error) {
			throw error;
		}
	};
};

export const updateTime = (time) => {
	return async (dispatch) => {
		try {
			dispatch(editTime({ time }));
		} catch (error) {
			throw error;
		}
	};
};

export default gameSlice.reducer;
