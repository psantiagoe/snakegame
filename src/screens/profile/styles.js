import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
	container: {
		flex: 1,
		// alignItems: "center",
		// justifyContent: "center",
		margin: 20,
	},
	profileContainer: {
		// flex: 1,
		flexDirection: "row",
		alignItems: "center",
		flexWrap: "wrap",
		marginBottom: 5,
	},
	userName: {
		marginLeft: 15,
		fontSize: 22,
	},
	image: {
		width: 100,
		height: 100,
		borderRadius: 100,
	},
});
