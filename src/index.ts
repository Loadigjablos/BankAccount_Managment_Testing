import { Database } from "./database";
import { Bank } from "./bank/bank";

import express, { Application, Request, Response } from 'express'
import http from 'http'

async function main() {
  const db = new Database();
  const bank = new Bank(db);
  await bank.loadAccounts();
  // Remove old accounts
  await bank.removeAccounts();
  // Create new accounts
  if (bank.accounts.length === 0) {
    await bank.createAccount(1234, 2000);
    await bank.createAccount(5678, 2000);
  }
  // Show accounts
  const account1 = bank.accounts[0];
  const account2 = bank.accounts[1];
  /*
  console.log("Initial accounts");
  await bank.showAccounts();
  // Do transaction
  await bank.transaction(
    account1.accountNumber,
    account2.accountNumber,
    1000,
    1234
  );
  console.log("After Successfull Transaction");
  await bank.showAccounts();
  // Do transaction (error due to insufficient funds)
  await bank.transaction(
    account1.accountNumber,
    account2.accountNumber,
    1500,
    1234
  );
  console.log("After Failed Transaction");
  await bank.showAccounts();
  // Do transaction with negative amount (error)
  await bank.transaction(
    account1.accountNumber,
    account2.accountNumber,
    -1000,
    1234
  );
  console.log("After Failed Transaction");
  await bank.showAccounts();
  // Do transaction with wrong pincode (error)
  await bank.transaction(account1.accountNumber, 0, 1000, 1234);
  console.log("After Failed Transaction");
  await bank.showAccounts();
  // Load accounts from database
  await bank.loadAccounts();
  console.log("After loading accounts from database");
  await bank.showAccounts();
*/
  const app: Application = express()

  app.get('/', async(req: Request, res: Response): Promise<Response> => {
    await bank.transaction(
      account1.accountNumber,
      account2.accountNumber,
      100,
      1234
    );
    await bank.showAccounts()
    return res.status(200).send({ info: "done"})
  })

  http.createServer(app).listen(3000, () => {
    console.log('Server is listening!')
  })

}

main();
