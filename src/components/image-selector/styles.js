import { StyleSheet } from "react-native";
import colors from "../../utils/colors";

export const styles = StyleSheet.create({
	container: {
		flex: 1,
		marginTop: 20,
	},
	preview: {
		width: "100%",
		height: 200,
		marginBottom: 10,
		justifyContent: "center",
		alignItems: "center",
		borderColor: colors.primary,
		borderWidth: 1,
	},
	image: {
		width: "100%",
		height: "100%",
	},
	text: {
		fontSize: 16,
		fontFamily: "Lato-Regular",
	},
});
