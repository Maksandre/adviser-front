import { query } from './sql';

export const incomes = {
  getIncomes: () =>
    query('SELECT * FROM incomes', [], (_, result, resolve) =>
      resolve(result.rows._array),
    ),

  createIncome: ({ name, amount, position, dateBegin, dateEnd }) =>
    query(
      `
      INSERT INTO incomes (name, amount, position, dateBegin, dateEnd)
      VALUES (?, ?, ?, ?, ?)
      `,
      [name, amount, position, dateBegin, dateEnd],
      (_, result, resolve) => resolve(result.insertId),
    ),

  updateIncome: (income) =>
    query(
      `
      UPDATE incomes
      SET name = ?,
          amount = ?,
          position = ?,
          dateBegin = ?, 
          dateEnd = ?
      WHERE id = ?`,
      [
        income.name,
        income.amount,
        income.position,
        income.dateBegin,
        income.dateEnd,
        income.id,
      ],
    ),

  deleteIncome: (id) => query(`DELETE FROM incomes WHERE id = ?`, [id]),
};