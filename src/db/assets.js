import { query } from './sql';

export const assets = {
  getAssets: () =>
    query(
      'SELECT name, amount, dateBegin, dateEnd, position, asset_id AS id FROM assets',
      [],
      (_, result, resolve) => resolve(result.rows._array),
    ),

  createAsset: ({ name, amount, position, dateBegin, dateEnd }) =>
    query(
      `
      INSERT INTO assets (name, amount, position, dateBegin, dateEnd)
      VALUES (?, ?, ?, ?, ?)
      `,
      [name, amount, position, dateBegin, dateEnd],
      (_, result, resolve) => resolve(result.insertId),
    ),

  updateAsset: (asset) =>
    query(
      `
      UPDATE assets
      SET name = ?,
          amount = ?,
          position = ?,
          dateBegin = ?, 
          dateEnd = ?
      WHERE asset_id = ?`,
      [
        asset.name,
        asset.amount,
        asset.position,
        asset.dateBegin,
        asset.dateEnd,
        asset.id,
      ],
    ),

  deleteAsset: (id) => query(`DELETE FROM assets WHERE asset_id = ?`, [id]),
};
