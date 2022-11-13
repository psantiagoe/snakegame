import { getScoreBoard, insertScore } from "../db";

import Score from "../model/score";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	scores: [],
};

const scoreBoardSlice = createSlice({
	name: "scoreboard",
	initialState,
	reducers: {
		addScore: (state, action) => {
			try {
				const newScore = new Score(
					action.payload.id.toString(),
					action.payload.date,
					action.payload.points,
					action.payload.time
				);
				state.scores.push(newScore);
			} catch (error) {
				throw error;
			}
		},
		setScoreBoard: (state, action) => {
			state.scores = action.payload;
		},
	},
});

export const { addScore, setScoreBoard } = scoreBoardSlice.actions;

export const saveScore = (date, points, time) => {
	return async (dispatch) => {
		try {
			const result = await insertScore(date, points, time);
			dispatch(addScore({ id: result.insertId, date, points, time }));
		} catch (error) {
			throw error;
		}
	};
};

export const loadScoreBoard = () => {
	return async (dispatch) => {
		try {
			const result = await getScoreBoard();
			dispatch(setScoreBoard(result?.rows?._array));
		} catch (error) {
			throw error;
		}
	};
};

export default scoreBoardSlice.reducer;
