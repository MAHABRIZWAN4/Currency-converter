#! /usr/bin/env node
import inquirer from "inquirer";

let welcome: string = "WELCOME TO MY CURRENCY CONVERTER PROJECT =>";
console.log(welcome);

const currency: any = {
  "United State Dollar (USD)": 1,   //Base Currency
  "Euro (EUR)": 0.93,
  "Indian Rupee (INR)": 83.34,
  "Pakistan Rupee (PKR)": 277.99,
  "Chinese Yuan (CNY)": 7.24,
  "Turkish lira (TRY)": 32.28,
  "Canadian Dollar(CAD)": 1.37,
  "Malaysian Ringgit (MYR)": 4.75,
  "Mauritian Rupee (MUR)": 46.12,
  "Saudi Riyal (SAR)": 3.75,
  "Serbian Dinar (RSD)": 109.03,
  "Sri Lankan Rupee (LKR)": 298.5,
};
let answer = await inquirer.prompt([
  {
    name: "from",
    message: "Enter from currency",
    type: "list",
    choices: [
      "United State Dollar (USD)",
      "Euro (EUR)",
      "Indian Rupee (INR)",
      "Pakistan Rupee (PKR)",
      "Chinese Yuan (CNY)",
      "Turkish lira (TRY)",
      "Canadian Dollar(CAD)",
      "Malaysian Ringgit (MYR)",
      "Mauritian Rupee (MUR)",
      "Saudi Riyal (SAR)",
      "Serbian Dinar (RSD)",
      "Sri Lankan Rupee (LKR)",
    ],
  },
  {
    name: "to",
    message: "Enter TO currency",
    type: "list",
    choices: [
      "United State Dollar (USD)",
      "Euro (EUR)",
      "Indian Rupee (INR)",
      "Pakistan Rupee (PKR)",
      "Chinese Yuan (CNY)",
      "Turkish lira (TRY)",
      "Canadian Dollar(CAD)",
      "Malaysian Ringgit (MYR)",
      "Mauritian Rupee (MUR)",
      "Saudi Riyal (SAR)",
      "Serbian Dinar (RSD)",
      "Sri Lankan Rupee (LKR)",
    ],
  },
  {
    name: "amount",
    message: "Enter your amount",
    type: "number",
  },
]);
let fromAmount = currency[answer.from];
let toAmount = currency[answer.to];
let amount = answer.amount;
let baseAmount = amount / fromAmount;
let convertedAmount = baseAmount * toAmount;
console.log(convertedAmount);
