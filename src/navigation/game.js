import { EditProfileScreen, GameScreen, HomeScreen, ProfileScreen } from "../screens";

import React from "react";
import colors from "../utils/colors";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

const GameNavigator = () => {
	return (
		<Stack.Navigator
			// initialRouteName="Home" //Original
			initialRouteName="Profile"
			screenOptions={{
				headerStyle: {
					backgroundColor: colors.primary,
				},
				headerTintColor: colors.text,
				headerTitleStyle: {
					fontFamily: "Lato-Bold",
				},
				headerTitleAlign: "center",
			}}
		>
			<Stack.Screen
				name="Home"
				component={HomeScreen}
				options={{ title: "Home" }}
			/>
			<Stack.Screen
				name="Game"
				component={GameScreen}
				options={{ title: "Game" }}
			/>
			<Stack.Screen
				name="Profile"
				component={ProfileScreen}
				options={{ title: "Profile" }}
			/>
			<Stack.Screen
				name="EditProfile"
				component={EditProfileScreen}
				options={{ title: "Profile Edition" }}
			/>
		</Stack.Navigator>
	);
};

export default GameNavigator;
