import DB from './db';

export async function bootstrap() {
  try {
    await DB.init();
    // const id = await DB.liabilities.createLiability({
    //   name: 'L1',
    //   amount: 10000,
    //   position: 1,
    // });
    // await DB.expenses.createExpense({
    //   name: 'E1',
    //   amount: 100,
    //   liabilityId: id,
    //   position: 1,
    // });
    console.log('DB started...');
  } catch (error) {
    console.error(error);
  }
}
