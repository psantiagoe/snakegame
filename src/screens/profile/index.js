import { Button, Image, Text, View } from "react-native";

import React from "react";
import colors from "../../utils/colors";
import { styles } from "./styles";
import { useSelector } from "react-redux";

const ProfileScreen = ({ navigation }) => {
	const photo = useSelector((state) => state.profile.photo);
	const userName = "Santiago";

	return (
		<View style={styles.container}>
			<View style={styles.profileContainer}>
				<Image
					style={styles.image}
					source={photo ? { uri: photo } : require("../../../assets/duck.jpg")}
				/>
				<Text style={styles.userName}>{`Welcome ${userName}`}</Text>
			</View>
			<Button
				title="Change photo"
				color={colors.secundary}
				onPress={() => navigation.navigate("PickPhoto")}
			/>
		</View>
	);
};

export default ProfileScreen;
