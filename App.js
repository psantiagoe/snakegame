import { ActivityIndicator, StyleSheet, View } from "react-native";

import AppNavigator from "./src/navigation/index";
import { Provider } from "react-redux";
import colors from "./src/utils/colors";
import { init } from "./src/db";
import { store } from "./src/store";
import { useFonts } from "expo-font";

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
	},
	containerLoader: {
		flex: 1,
		backgroundColor: "#fff",
		justifyContent: "center",
		alignItems: "center",
	},
});

export default function App() {
	const [loaded] = useFonts({
		"Lato-Regular": require("./assets/fonts/Lato-Regular.ttf"),
		"Lato-Bold": require("./assets/fonts/Lato-Bold.ttf"),
		"Lato-Italic": require("./assets/fonts/Lato-Italic.ttf"),
	});

	if (!loaded) {
		return (
			<View style={styles.containerLoader}>
				<ActivityIndicator size="large" color={colors.primary} />
			</View>
		);
	}

	init()
		.then(() => {
			console.log("Database initalized");
		})
		.catch((error) => {
			console.log("Falied to initialize Database");
			console.log(error.message);
		});

	return (
		<Provider store={store} style={styles.container}>
			<AppNavigator />
		</Provider>
	);
}
