import { EditProfileScreen, GameScreen, HomeScreen, ProfileScreen } from "../screens";

import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { TouchableOpacity } from "react-native";
import colors from "../utils/colors";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

const GameNavigator = () => {
	return (
		<Stack.Navigator
			initialRouteName="Home"
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
				options={({ navigation }) => ({
					title: "Home",
					headerRight: () => (
						<TouchableOpacity onPress={() => navigation.navigate("Profile")}>
							<Ionicons
								name="person-circle-outline"
								size={36}
								color={colors.black}
							/>
						</TouchableOpacity>
					),
				})}
			/>
			<Stack.Screen
				name="Game"
				component={GameScreen}
				options={{ title: "Have Fun!" }}
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
