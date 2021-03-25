import DB from './db';

export async function bootstrap() {
  try {
    await DB.init();
    // await DB.economy.createYield({ name: 'bonds', rate: 3.3, position: 0 });
    // await DB.economy.createYield({ name: 'shares', rate: 7.4, position: 1 });
    // await DB.economy.createYield({ name: 'deposits', rate: 2.1, position: 2 });
    console.log('DB started...');
  } catch (error) {
    console.error(error);
  }
}
