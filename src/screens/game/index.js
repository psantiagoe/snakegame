import { Alert, Button, TouchableOpacity, View } from "react-native";
import { Food, Head, Points, Tail, Timer } from "../../components";
import React, { useEffect, useState } from "react";
import { updateScore, updateTime } from "../../store/game.slice";
import { useDispatch, useSelector } from "react-redux";

import { FontAwesome } from "@expo/vector-icons";
import { GameEngine } from "react-native-game-engine";
import GameLoop from "../../engine/GameLoop";
import colors from "../../utils/colors";
import constants from "../../utils/constants";
import { randomBetween } from "../../utils/functions";
import { saveScore } from "../../store/scoreboard.slice";
import { styles } from "./styles";

const GameScreen = () => {
	const dispatch = useDispatch();
	const boardSize = constants.GRID_SIZE * constants.CELL_SIZE;
	let engine = null;
	const [running, setRunning] = useState(true);
	const [points, setPoints] = useState(0);

	const pointsRdx = useSelector((state) => state.game.score);
	const timeRdx = useSelector((state) => state.game.time);

	const onHandlerUp = () => {
		engine.dispatch({ type: "MOVE_UP" });
	};

	const onHandlerRight = () => {
		engine.dispatch({ type: "MOVE_RIGHT" });
	};

	const onHandlerDown = () => {
		engine.dispatch({ type: "MOVE_DOWN" });
	};

	const onHandlerLeft = () => {
		engine.dispatch({ type: "MOVE_LEFT" });
	};

	const onReset = () => {
		engine.swap({
			head: {
				position: [0, 0],
				xspeed: 1,
				yspeed: 0,
				updateFrequency: 10,
				nextMove: 10,
				size: constants.CELL_SIZE,
				renderer: <Head />,
			},
			food: {
				position: [
					randomBetween(0, constants.GRID_SIZE - 1),
					randomBetween(0, constants.GRID_SIZE - 1),
				],
				size: constants.CELL_SIZE,
				renderer: <Food />,
			},
			tail: { size: constants.CELL_SIZE, elements: [], renderer: <Tail /> },
		});

		const today = new Date(Date.now());

		dispatch(saveScore(today.toLocaleDateString("es-ES"), points, timeRdx));
		dispatch(updateScore(0));
		dispatch(updateTime(0));

		setRunning(true);
		setPoints(0);
	};

	const onEvent = (e) => {
		if (e.type === "GAME_OVER") {
			Alert.alert("Game Over");
			setRunning(false);
		}
	};

	useEffect(() => {
		setPoints(pointsRdx);
	});

	return (
		<View style={styles.container}>
			<View style={styles.pointsTimerContainer}>
				<Points points={points} />
				<Timer running={running} />
			</View>
			<GameEngine
				ref={(ref) => {
					engine = ref;
				}}
				style={{
					width: boardSize,
					height: boardSize,
					...styles.board,
				}}
				systems={[GameLoop]}
				entities={{
					head: {
						position: [0, 0],
						xspeed: 1,
						yspeed: 0,
						updateFrequency: 10,
						nextMove: 10,
						size: constants.CELL_SIZE,
						renderer: <Head />,
					},
					food: {
						position: [
							randomBetween(0, constants.GRID_SIZE - 1),
							randomBetween(0, constants.GRID_SIZE - 1),
						],
						size: constants.CELL_SIZE,
						renderer: <Food />,
					},
					tail: { size: constants.CELL_SIZE, elements: [], renderer: <Tail /> },
				}}
				onEvent={onEvent}
				running={running}
			/>
			<View style={styles.btnContainer}>
				<Button
					title="Start new game"
					onPress={onReset}
					disabled={running}
					color={colors.secundary}
				/>
			</View>
			<View style={styles.arrowContainer}>
				<TouchableOpacity onPress={onHandlerUp} style={styles.arrowUp}>
					<FontAwesome name="arrow-up" size={40} color={colors.black} />
				</TouchableOpacity>
				<TouchableOpacity onPress={onHandlerRight} style={styles.arrowRight}>
					<FontAwesome name="arrow-right" size={40} color={colors.black} />
				</TouchableOpacity>
				<TouchableOpacity onPress={onHandlerDown} style={styles.arrowDown}>
					<FontAwesome name="arrow-down" size={40} color={colors.black} />
				</TouchableOpacity>
				<TouchableOpacity onPress={onHandlerLeft} style={styles.arrowLeft}>
					<FontAwesome name="arrow-left" size={40} color={colors.black} />
				</TouchableOpacity>
			</View>
		</View>
	);
};

export default GameScreen;
