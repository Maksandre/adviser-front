import { query } from './sql';

export const expenses = {
  getExpenses: () =>
    query('SELECT * FROM expenses', [], (_, result, resolve) =>
      resolve(result.rows._array),
    ),

  createExpense: ({ name, amount, position, dateBegin, dateEnd }) =>
    query(
      `
      INSERT INTO expenses (name, amount, position, dateBegin, dateEnd)
      VALUES (?, ?, ?, ?, ?)
      `,
      [name, amount, position, dateBegin, dateEnd],
      (_, result, resolve) => resolve(result.insertId),
    ),

  updateExpense: (expense) =>
    query(
      `
      UPDATE expenses
      SET name = ?,
          amount = ?,
          position = ?,
          dateBegin = ?, 
          dateEnd = ?
      WHERE id = ?`,
      [
        expense.name,
        expense.amount,
        expense.position,
        expense.dateBegin,
        expense.dateEnd,
        expense.id,
      ],
    ),

  deleteExpense: (id) => query(`DELETE FROM expenses WHERE id = ?`, [id]),
};
