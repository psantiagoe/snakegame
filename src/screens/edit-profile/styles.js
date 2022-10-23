import { StyleSheet } from "react-native";
import colors from "../../utils/colors";

export const styles = StyleSheet.create({
	container: {
		flex: 1,
		margin: 20,
	},
	selectorContainer: {
		flex: 1,
		justifyContent: "flex-start",
	},
	inputContainer: {
		flex: 1,
		maxHeight: 50,
	},
	label: {
		fontSize: 16,
		fontFamily: "Lato-Bold",
	},
	textInput: {
		fontSize: 16,
		fontFamily: "Lato-Regular",
		borderBottomColor: colors.primary,
		borderBottomWidth: 1,
		padding: 3,
	},
});
