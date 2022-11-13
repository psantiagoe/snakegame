import { StyleSheet } from "react-native";
import colors from "../../utils/colors";

export const styles = StyleSheet.create({
	container: {
		borderColor: colors.primary,
		borderWidth: 1,
		borderRadius: 10,
		padding: 3,
	},
	headerContainer: {
		flexDirection: "row",
		justifyContent: "space-between",
		paddingVertical: 10,
		paddingHorizontal: 20,
		borderBottomColor: colors.secundary,
		borderBottomWidth: 1,
	},
	header: {
		fontSize: 14,
		fontFamily: "Lato-Bold",
	},
	rowsContainer: {
		marginVertical: 5,
	},
	row: {
		flexDirection: "row",
		justifyContent: "space-between",
		height: 25,
		marginHorizontal: 10,
		paddingTop: 5,
	},
	text: {
		fontSize: 14,
		fontFamily: "Lato-Regular",
	},
	emptyContainer: {
		justifyContent: "center",
		alignItems: "center",
		marginVertical: 20,
	},
	empty: {
		fontFamily: "Lato-Bold",
		fontSize: 18,
	},
});
