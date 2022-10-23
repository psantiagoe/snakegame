import { FlatList, Text, View } from "react-native";

import React from "react";
import { styles } from "./styles";

const Table = ({ headers, data }) => {
	const renderItem = ({ item }) => {
		return (
			<View style={styles.row}>
				{item.values.map((value, index) => {
					return (
						<Text key={index} style={styles.text}>
							{value}
						</Text>
					);
				})}
			</View>
		);
	};

	const ListEmptyComponent = () => (
		<View style={styles.emptyContainer}>
			<Text style={styles.empty}>No data yet.</Text>
		</View>
	);

	return (
		<View style={styles.container}>
			<View style={styles.headerContainer}>
				{headers.map((header) => {
					return (
						<Text key={header.id} style={styles.header}>
							{header.value}
						</Text>
					);
				})}
			</View>
			<FlatList
				data={data}
				renderItem={renderItem}
				keyExtractor={(item) => item.id.toString()}
				style={styles.rowsContainer}
				ListEmptyComponent={ListEmptyComponent}
			/>
		</View>
	);
};

export default Table;
