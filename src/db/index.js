import { economy } from './economy';
import { incomes } from './incomes';
import { query } from './sql';

export default DB = {
  init: () => {
    return Promise.all(
      query(
        'CREATE TABLE IF NOT EXISTS yields (id INTEGER PRIMARY KEY NOT NULL, name TEXT NOT NULL, rate REAL NOT NULL, position INTEGER NOT NULL)',
      ),
      query(
        'CREATE TABLE IF NOT EXISTS inflation_rates (id INTEGER PRIMARY KEY NOT NULL, name TEXT NOT NULL, rate REAL NOT NULL, position INTEGER NOT NULL)',
      ),
      query(
        'CREATE TABLE IF NOT EXISTS incomes (id INTEGER PRIMARY KEY NOT NULL, name TEXT NOT NULL, amount REAL NOT NULL, dateBegin TEXT, dateEnd TEXT, position INTEGER NOT NULL)',
      ),
    );
  },
  economy,
  incomes,
};
