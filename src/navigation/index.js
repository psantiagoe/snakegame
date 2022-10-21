import GameNavigator from "./game";
import { NavigationContainer } from "@react-navigation/native";
import React from "react";

const AppNavigator = () => {
	return (
		<NavigationContainer>
			<GameNavigator />
		</NavigationContainer>
	);
};

export default AppNavigator;
