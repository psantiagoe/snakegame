import React from "react";
import { View } from "react-native";
import { styles } from "./styles";

const Head = ({ position, size }) => {
	const x = position[0];
	const y = position[1];

	return (
		<View
			style={{
				width: size,
				height: size,
				left: x * size,
				top: y * size,
				...styles.head,
			}}
		/>
	);
};

export default Head;
