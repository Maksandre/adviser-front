import { query } from './sql';

export const expenses = {
  getExpenses: () =>
    query(
      'SELECT *, expense_id AS id FROM expenses',
      [],
      (_, result, resolve) => resolve(result.rows._array),
    ),

  createExpense: ({
    name,
    amount,
    position,
    liabilityId,
    dateBegin,
    dateEnd,
  }) =>
    query(
      `
      INSERT INTO expenses (name, amount, position, liabilityId, dateBegin, dateEnd)
      VALUES (?, ?, ?, ?, ?, ?)
      `,
      [name, amount, position, liabilityId, dateBegin, dateEnd],
      (_, result, resolve) => resolve(result.insertId),
    ),

  updateExpense: (expense) =>
    query(
      `
      UPDATE expenses
      SET name = ?,
          amount = ?,
          position = ?,
          liabilityId = ?,
          dateBegin = ?, 
          dateEnd = ?
      WHERE expense_id = ?`,
      [
        expense.name,
        expense.amount,
        expense.position,
        expense.liabilityId,
        expense.dateBegin,
        expense.dateEnd,
        expense.id,
      ],
    ),

  deleteExpense: (id) =>
    query(`DELETE FROM expenses WHERE expense_id = ?`, [id]),
};
