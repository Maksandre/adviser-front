import DB from './db';

export async function bootstrap() {
  try {
    await DB.init();
    // await DB.incomes.createIncome({
    //   name: 'Salary',
    //   amount: '20000',
    //   position: 0,
    //   dateBegin: '1980-02-22 13:19:01.00000',
    //   dateEnd: '1985-02-22 13:19:01.00000',
    // });
    console.log('DB started...');
  } catch (error) {
    console.error(error);
  }
}
