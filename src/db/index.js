import { economy } from './economy';
import { incomes } from './incomes';
import { expenses } from './expenses';
import { liabilities } from './liabilities';
import { enableForeignKeys, query } from './sql';

export default DB = {
  init: () => {
    enableForeignKeys();
    return Promise.all(
      query(
        // 'DROP TABLE yields',
        'CREATE TABLE IF NOT EXISTS yields (yield_id INTEGER PRIMARY KEY NOT NULL, name TEXT NOT NULL, rate REAL NOT NULL, position INTEGER NOT NULL)',
      ),
      query(
        // 'DROP TABLE inflation_rates',
        'CREATE TABLE IF NOT EXISTS inflation_rates (inflation_id INTEGER PRIMARY KEY NOT NULL, name TEXT NOT NULL, rate REAL NOT NULL, position INTEGER NOT NULL)',
      ),
      query(
        // 'DROP TABLE incomes',
        'CREATE TABLE IF NOT EXISTS incomes (income_id INTEGER PRIMARY KEY NOT NULL, name TEXT NOT NULL, amount REAL NOT NULL, dateBegin TEXT, dateEnd TEXT, position INTEGER NOT NULL)',
      ),
      query(
        // 'DROP TABLE expenses',
        'CREATE TABLE IF NOT EXISTS expenses (expense_id INTEGER PRIMARY KEY NOT NULL, name TEXT NOT NULL, amount REAL NOT NULL, liabilityId INTEGER REFERENCES liabilities(liability_id) ON DELETE SET NULL, dateBegin TEXT, dateEnd TEXT, position INTEGER NOT NULL)',
      ),
      query(
        // 'DROP TABLE liabilities',
        'CREATE TABLE IF NOT EXISTS liabilities (liability_id INTEGER PRIMARY KEY NOT NULL, name TEXT NOT NULL, amount REAL NOT NULL, dateBegin TEXT, dateEnd TEXT, position INTEGER NOT NULL)',
      ),
    );
  },
  economy,
  incomes,
  expenses,
  liabilities,
};
