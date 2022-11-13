import React, { useEffect, useState } from "react";

import { Text } from "react-native";
import { styles } from "./styles";
import { updateTime } from "../../store/game.slice";
import { useDispatch } from "react-redux";

const Timer = ({ style, running }) => {
	const dispatch = useDispatch();
	const [time, setTime] = useState(0);
	const [intervalId, setIntervalId] = useState(0);

	const start = () => {
		setTime(0);
		const newIntervalId = setInterval(() => setTime((time) => time + 1), 1000);
		setIntervalId(newIntervalId);
	};

	const stop = () => {
		clearInterval(intervalId);
		setIntervalId(0);
	};

	const hours = Math.floor(time / 3600)
		.toString()
		.padStart(2, "0");
	const minutes = Math.floor((time - hours * 3600) / 60)
		.toString()
		.padStart(2, "0");
	const seconds = (time - hours * 3600 - minutes * 60).toString().padStart(2, "0");

	useEffect(() => {
		if (!running) {
			stop();
			dispatch(updateTime(`${hours}:${minutes}:${seconds}`));
		} else {
			start();
		}
	}, [running]);

	return (
		<Text style={{ ...styles.timer, ...style }}>
			{`Time: ${hours}:${minutes}:${seconds}`}
		</Text>
	);
};

export default Timer;
