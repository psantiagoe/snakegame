import { Button, Image, Text, View } from "react-native";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Table from "../../components/table";
import colors from "../../utils/colors";
import { loadProfile } from "../../store/profile.slice";
import { loadScoreBoard } from "../../store/scoreboard.slice";
import { styles } from "./styles";

const ProfileScreen = ({ navigation }) => {
	const dispatch = useDispatch();
	const photo = useSelector((state) => state.profile.photo);
	const userName = useSelector((state) => state.profile.userName);
	const scoreBoard = useSelector((state) => state.scoreBoard.scores);

	useEffect(() => {
		dispatch(loadProfile());
		dispatch(loadScoreBoard());
	}, [dispatch]);

	const headers = [
		{ id: 1, value: "Date" },
		{ id: 2, value: "Points" },
		{ id: 3, value: "Time" },
	];

	return (
		<View style={styles.container}>
			<View style={styles.profileContainer}>
				<Image
					style={styles.image}
					source={photo ? { uri: photo } : require("../../../assets/duck.jpg")}
				/>
				<Text style={styles.userName}>{userName ? userName : "User"}</Text>
			</View>
			<Button
				title="Edit your profile"
				color={colors.secundary}
				onPress={() => navigation.navigate("EditProfile")}
			/>
			<View style={styles.dashboard}>
				<Text style={styles.titleDashboard}>Your Last Plays</Text>
				<Table headers={headers} data={scoreBoard} />
			</View>
		</View>
	);
};

export default ProfileScreen;
