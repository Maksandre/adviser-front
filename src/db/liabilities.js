import { query } from './sql';

export const liabilities = {
  getLiabilities: () =>
    query(
      'SELECT name, amount, dateBegin, dateEnd, position, liability_id AS id FROM liabilities',
      [],
      (_, result, resolve) => resolve(result.rows._array),
    ),

  createLiability: ({ name, amount, position, dateBegin, dateEnd }) =>
    query(
      `
      INSERT INTO liabilities (name, amount, position, dateBegin, dateEnd)
      VALUES (?, ?, ?, ?, ?)
      `,
      [name, amount, position, dateBegin, dateEnd],
      (_, result, resolve) => resolve(result.insertId),
    ),

  updateLiability: (liability) =>
    query(
      `
      UPDATE liabilities
      SET name = ?,
          amount = ?,
          position = ?,
          dateBegin = ?, 
          dateEnd = ?
      WHERE liability_id = ?`,
      [
        liability.name,
        liability.amount,
        liability.position,
        liability.dateBegin,
        liability.dateEnd,
        liability.id,
      ],
    ),

  deleteLiability: (id) =>
    query(`DELETE FROM liabilities WHERE liability_id = ?`, [id]),
};
