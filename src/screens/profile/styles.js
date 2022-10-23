import { StyleSheet } from "react-native";
import colors from "../../utils/colors";

export const styles = StyleSheet.create({
	container: {
		flex: 1,
		margin: 20,
	},
	profileContainer: {
		flexDirection: "row",
		alignItems: "center",
		flexWrap: "wrap",
		marginBottom: 5,
	},
	userName: {
		marginLeft: 15,
		fontSize: 22,
		fontFamily: "Lato-Regular",
	},
	image: {
		width: 100,
		height: 100,
		borderRadius: 100,
	},
	dashboard: {
		marginVertical: 20,
	},
	titleDashboard: {
		fontSize: 18,
		fontFamily: "Lato-Bold",
		padding: 5,
		textAlign: "center",
	},
});
