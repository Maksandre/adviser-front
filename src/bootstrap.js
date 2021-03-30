import DB from './db';

export async function bootstrap() {
  try {
    await DB.init();
    // await DB.incomes.createIncome({
    //   name: 'Salary',
    //   amount: '20000',
    //   position: 0,
    //   dateBegin: '2012-02-19T06:00:00Z',
    //   dateEnd: '2019-02-19T06:00:00Z',
    // });
    // await DB.incomes.createIncome({
    //   name: 'Business',
    //   amount: '1000',
    //   position: 0,
    //   dateBegin: '2014-02-19T06:00:00Z',
    //   dateEnd: '2025-02-19T06:00:00Z',
    // });
    console.log('DB started...');
  } catch (error) {
    console.error(error);
  }
}
