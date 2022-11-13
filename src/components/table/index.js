import { FlatList, Text, View } from "react-native";

import React from "react";
import { styles } from "./styles";

const Table = ({ headers, data }) => {
	const renderItem = ({ item }) => {
		return (
			<View style={styles.row}>
				<Text style={styles.text}>{item.date}</Text>
				<Text style={styles.text}>{item.points}</Text>
				<Text style={styles.text}>{item.time}</Text>
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
