import * as SQLite from "expo-sqlite";

const db = SQLite.openDatabase("profile.db");

export const init = () => {
	const promise = new Promise((resolve, reject) => {
		db.transaction((tx) => {
			tx.executeSql(
				"CREATE TABLE IF NOT EXISTS profile (id INTEGER PRIMARY KEY NOT NULL, username TEXT NOT NULL, image TEXT NOT NULL);",
				[],
				() => resolve(),
				(_, err) => reject(err)
			);
		});
	});

	return promise;
};

const deleteProfile = () => {
	const promise = new Promise((resolve, reject) => {
		db.transaction((tx) => {
			tx.executeSql(
				"DELETE FROM profile;",
				[],
				() => resolve(),
				(_, err) => reject(err)
			);
		});
	});
};

export const insertProfile = (userName, photo) => {
	deleteProfile();
	const promise = new Promise((resolve, reject) => {
		db.transaction((tx) => {
			tx.executeSql(
				"INSERT INTO profile (username, image) values (?, ?);",
				[userName, photo],
				(_, result) => resolve(result),
				(_, err) => reject(err)
			);
		});
	});

	return promise;
};

export const getProfile = () => {
	const promise = new Promise((resolve, reject) => {
		db.transaction((tx) => {
			tx.executeSql(
				"SELECT * FROM profile",
				[],
				(_, result) => resolve(result),
				(_, err) => reject(err)
			);
		});
	});

	return promise;
};
