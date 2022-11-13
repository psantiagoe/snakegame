import { StyleSheet } from "react-native";
import colors from "../../utils/colors";

export const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
	board: {
		flex: null,
		backgroundColor: colors.background,
	},
	arrowContainer: {
		flex: 1,
		maxHeight: "30%",
		justifyContent: "center",
		alignItems: "center",
	},
	arrowUp: {
		position: "absolute",
		top: 5,
		padding: 10,
		borderColor: colors.grey,
		borderWidth: 2,
		borderRadius: 15,
	},
	arrowRight: {
		position: "absolute",
		right: -90,
		padding: 10,
		borderColor: colors.grey,
		borderWidth: 2,
		borderRadius: 15,
	},
	arrowDown: {
		position: "absolute",
		bottom: 5,
		padding: 10,
		borderColor: colors.grey,
		borderWidth: 2,
		borderRadius: 15,
	},
	arrowLeft: {
		position: "absolute",
		left: -90,
		padding: 10,
		borderColor: colors.grey,
		borderWidth: 2,
		borderRadius: 15,
	},
	btnContainer: {
		marginVertical: 20,
		width: "60%",
	},
	pointsTimerContainer: {
		flexDirection: "row",
		width: "70%",
		justifyContent: "space-between",
		marginBottom: 5,
	},
});
