import React, { useEffect } from "react";

import { View } from "react-native";
import constants from "../../utils/constants";
import { styles } from "./styles";
import { updateScore } from "../../store/game.slice";
import { useDispatch } from "react-redux";

const Tail = ({ elements, size }) => {
	const dispatch = useDispatch();
	let tailList = elements.map((element, index) => {
		return (
			<View
				key={index}
				style={{
					width: size,
					height: size,
					left: element[0] * size,
					top: element[1] * size,
					...styles.tail,
				}}
			/>
		);
	});

	useEffect(() => {
		dispatch(updateScore(tailList.length));
	}, [tailList]);

	return (
		<View
			style={{
				width: constants.GRID_SIZE * size,
				height: constants.GRID_SIZE * size,
			}}
		>
			{tailList}
		</View>
	);
};

export default Tail;
