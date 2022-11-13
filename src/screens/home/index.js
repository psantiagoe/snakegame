import { Button, Image, Text, View } from "react-native";
import React, { useEffect } from "react";
import { updateScore, updateTime } from "../../store/game.slice";
import { useDispatch, useSelector } from "react-redux";

import colors from "../../utils/colors";
import { saveScore } from "../../store/scoreboard.slice";
import { styles } from "./styles";

const HomeScreen = ({ navigation }) => {
	const dispatch = useDispatch();
	const points = useSelector((state) => state.game.score);
	const time = useSelector((state) => state.game.time);

	const onHandlerStart = () => {
		navigation.navigate("Game");
	};

	useEffect(() => {
		const unsubscribe = navigation.addListener("focus", () => {
			if (points !== 0 || time !== 0) {
				const today = new Date(Date.now());

				dispatch(saveScore(today.toLocaleDateString("es-ES"), points, time));
				dispatch(updateScore(0));
				dispatch(updateTime(0));
			}
		});

		return unsubscribe;
	}, [navigation, points, time]);

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
