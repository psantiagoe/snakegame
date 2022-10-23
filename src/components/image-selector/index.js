import * as ImagePicker from "expo-image-picker";

import { Alert, Button, Image, Linking, Text, View } from "react-native";

import React from "react";
import colors from "../../utils/colors";
import { styles } from "./styles";
import { useSelector } from "react-redux";
import { useState } from "react";

const ImageSelector = ({ onPhotoPicked }) => {
	const [pickedUrl, setPickedUrl] = useState(
		useSelector((state) => state.profile.photo)
	);

	const verifyPermissions = async () => {
		const { status } = await ImagePicker.requestCameraPermissionsAsync();

		if (status !== "granted") {
			Alert.alert(
				"Permission Denied",
				"You need to grant camera permissions to use this app",
				[
					{
						text: "Cancel",
						onPress: () => {
							return;
						},
						style: "cancel",
					},
					{
						text: "OK",
						onPress: async () => {
							await Linking.openSettings();
						},
					},
				]
			);
			return false;
		}
		return true;
	};

	const onHandleTakePhoto = async () => {
		let hasPermission = await verifyPermissions();

		if (!hasPermission) return;

		const image = await ImagePicker.launchCameraAsync({
			allowsEditing: true,
			aspect: [16, 9],
			quality: 0.5,
		});

		setPickedUrl(image.uri);
		onPhotoPicked(image.uri);
	};

	return (
		<View style={styles.container}>
			<View style={styles.preview}>
				{!pickedUrl ? (
					<Text style={styles.text}>No imagen picked yet.</Text>
				) : (
					<Image style={styles.image} source={{ uri: pickedUrl }} />
				)}
			</View>
			<Button
				title="Take Photo"
				color={colors.secundary}
				onPress={onHandleTakePhoto}
			/>
		</View>
	);
};

export default ImageSelector;
