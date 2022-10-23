import { Button, Image, Text, View } from "react-native";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Table from "../../components/table";
import colors from "../../utils/colors";
import { loadProfile } from "../../store/profile.slice";
import { styles } from "./styles";

const ProfileScreen = ({ navigation }) => {
	const dispatch = useDispatch();
	const photo = useSelector((state) => state.profile.photo);
	const userName = useSelector((state) => state.profile.userName);

	useEffect(() => {
		dispatch(loadProfile());
	}, [dispatch]);

	const headers = [
		{ id: 1, value: "Date" },
		{ id: 2, value: "Points" },
		{ id: 3, value: "Time" },
	];

	const items = [
		{
			id: 1,
			values: ["12/10/2022", 98, "15:00"],
		},
		{
			id: 2,
			values: ["15/10/2022", 18, "01:23"],
		},
		{
			id: 3,
			values: ["17/10/2022", 52, "05:12"],
		},
		{
			id: 4,
			values: ["20/10/2022", 12, "01:42"],
		},
		{
			id: 5,
			values: ["22/10/2022", 25, "03:58"],
		},
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
				<Table headers={headers} data={items} />
			</View>
		</View>
	);
};

export default ProfileScreen;
