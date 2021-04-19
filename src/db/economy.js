import { query } from './sql';

export const economy = {
  getYields: () =>
    query('SELECT *, yield_id AS id FROM yields', [], (_, result, resolve) =>
      resolve(result.rows._array),
    ),

  createYield: ({ name, rate, position }) =>
    query(
      'INSERT INTO yields (name, rate, position) VALUES (?, ?, ?)',
      [name, rate, position],
      (_, result, resolve) => resolve(result.insertId),
    ),

  deleteYield: (id) =>
    query(
      'DELETE FROM yields WHERE yield_id = ?',
      [id],
      (_, result, resolve) => {
        return resolve(result);
      },
    ),

  updateYield: (yieldObj) =>
    query(
      `UPDATE yields SET name = ?, rate = ?, position = ? WHERE yield_id = ?`,
      [yieldObj.name, yieldObj.rate, yieldObj.position, yieldObj.id],
    ),

  getInflationRates: () =>
    query(
      'SELECT *, inflation_id AS id FROM inflation_rates',
      [],
      (_, result, resolve) => resolve(result.rows._array),
    ),

  createInflationRate: ({ name, rate, position }) =>
    query(
      'INSERT INTO inflation_rates (name, rate, position) VALUES (?, ?, ?)',
      [name, rate, position],
      (_, result, resolve) => resolve(result.insertId),
    ),
  updateInflationRate: (rate) =>
    query(
      `UPDATE inflation_rates SET name = ?, rate = ?, position = ? WHERE inflation_id = ?`,
      [rate.name, rate.rate, rate.position, rate.id],
    ),

  deleteInflationRate: (id) =>
    query(
      'DELETE FROM inflation_rates WHERE inflation_id = ?',
      [id],
      (_, result, resolve) => {
        return resolve(result);
      },
    ),
};
