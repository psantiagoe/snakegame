import { StyleSheet, View } from "react-native";

import AppNavigator from "./src/navigation/index";
import { Provider } from "react-redux";
import { store } from "./src/store";

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
	},
});

export default function App() {
	return (
		<Provider store={store} style={styles.container}>
			<AppNavigator />
		</Provider>
	);
}
