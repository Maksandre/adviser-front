import { economy } from './economy';
import { query } from './sql';

export default DB = {
  init: () => {
    return Promise.all(
      query(
        // 'DROP TABLE yields',
        'CREATE TABLE IF NOT EXISTS yields (id INTEGER PRIMARY KEY NOT NULL, name TEXT NOT NULL, rate REAL NOT NULL, position INTEGER NOT NULL)',
      ),
      query(
        'CREATE TABLE IF NOT EXISTS inflation_rates (id INTEGER PRIMARY KEY NOT NULL, name TEXT NOT NULL, rate REAL NOT NULL, position INTEGER NOT NULL)',
      ),
    );
  },
  economy,
};
