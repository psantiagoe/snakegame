import { Button, Text, TextInput, View } from "react-native";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { ImageSelector } from "../../components";
import colors from "../../utils/colors";
import { saveProfile } from "../../store/profile.slice";
import { styles } from "./styles";

const EditProfileScreen = ({ navigation }) => {
	const dispatch = useDispatch();
	const [photo, setPhoto] = useState(useSelector((state) => state.profile.photo));
	const [userName, setUserName] = useState(
		useSelector((state) => state.profile.userName)
	);

	const onHandlerChangeText = (text) => {
		setUserName(text);
	};

	const onHandlerSave = (image, name) => {
		dispatch(saveProfile(image, name));
		navigation.goBack();
	};

	const onPhotoPicked = (image) => {
		setPhoto(image);
	};

	return (
		<View style={styles.container}>
			<View style={styles.selectorContainer}>
				<View style={styles.inputContainer}>
					<Text style={styles.label}>Select your user name:</Text>
					<TextInput
						style={styles.textInput}
						onChangeText={(text) => onHandlerChangeText(text)}
						value={userName}
						placeholder="User name"
						maxLength={30}
					/>
				</View>
				<ImageSelector onPhotoPicked={onPhotoPicked} />
			</View>
			<Button
				title="Save Changes"
				onPress={() => onHandlerSave(photo, userName)}
				color={colors.primary}
			/>
		</View>
	);
};

export default EditProfileScreen;
