import React from "react";
import { Text } from "react-native";
import { styles } from "./styles";

const Points = ({ points }) => {
	return <Text style={styles.points}>{`Points: ${points}`}</Text>;
};

export default Points;
