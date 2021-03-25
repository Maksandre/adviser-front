import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase('adviser.db');

export function query(sqlQuery, args, callback, errorCallback) {
  return new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        sqlQuery,
        args || [],
        callback ? (_, result) => callback(_, result, resolve) : resolve,
        errorCallback
          ? (_, error) => errorCallback(_, error, reject)
          : (_, error) => reject(error),
      );
    });
  });
}
