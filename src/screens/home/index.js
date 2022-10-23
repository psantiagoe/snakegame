import { Button, Image, Text, View } from "react-native";

import React from "react";
import colors from "../../utils/colors";
import { styles } from "./styles";

const HomeScreen = ({ navigation }) => {
	const onHandlerStart = () => {
		navigation.navigate("Game");
	};

	return (
		<View style={styles.container}>
			<View style={styles.titleContainer}>
				<Text style={styles.title}>Welcome to Snake Game!</Text>
			</View>
			<Image style={styles.image} source={require("../../../assets/snake.png")} />
			<Button
				title="Start New Game"
				color={colors.secundary}
				onPress={onHandlerStart}
			/>
		</View>
	);
};

export default HomeScreen;
