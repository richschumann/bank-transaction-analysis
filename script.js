const transactions = [ ];
const transactionCategories = [ "Personal banking", "Business banking", "Utilities", "Retail" ];
const transactionMonths = [1, 2, 3, 4, 1, 5, 6, 1, 7, 8, 9, 10, 11, 12];

for ( let i = 0; i < 100; i++) { 
let transactionType = "";
let amount = 0;
const transactionCategory = transactionCategories[i % 4];
  
if (i % 2 === 0) {
  transactionType = "Deposit";
} else { 
  transactionType = "Withdrawal"; }

if (transactionType === "Deposit") {
  amount = 500 + ( i % 20 ) * 500;
} else {
  amount = 100 + ( i % 50 ) * 100;
}
  
 transactions.push( {
  date: `2026-${String(transactionMonths[i % 14]).padStart(2, "0")}-15`,
  transactionId: `TXN-${String(i + 1).padStart(3, "0")}`,
  branchName: "North Branch",
  amount: amount,
  transactionType: transactionType,
  transactionCategory: transactionCategory
  });
}
for ( let i = 100; i < 200; i++) { 
let transactionType = "";
let amount = 0;
const transactionCategory = transactionCategories[i % 4];
  
if (i % 2 === 0) {
  transactionType = "Deposit";
} else { 
  transactionType = "Withdrawal"; }

if (transactionType === "Deposit") {
  amount = 500 + ( i % 20 ) * 500;
} else {
  amount = 100 + ( i % 50 ) * 100;
}
  
 transactions.push( {
  date: `2026-${String(transactionMonths[i % 14]).padStart(2, "0")}-15`,
  transactionId: `TXN-${String(i + 1).padStart(3, "0")}`,
  branchName: "South Branch",
  amount: amount,
  transactionType: transactionType,
  transactionCategory: transactionCategory
  });
}
for ( let i = 200; i < 300; i++) { 
let transactionType = "";
let amount = 0;
const transactionCategory = transactionCategories[i % 4];
  
if (i % 2 === 0) {
  transactionType = "Deposit";
} else { 
  transactionType = "Withdrawal"; }

if (transactionType === "Deposit") {
  amount = 500 + ( i % 20 ) * 500;
} else {
  amount = 100 + ( i % 50 ) * 100;
}
  
 transactions.push( {
  date: `2026-${String(transactionMonths[i % 14]).padStart(2, "0")}-15`,
  transactionId: `TXN-${String(i + 1).padStart(3, "0")}`,
  branchName: "Central Branch",
  amount: amount,
  transactionType: transactionType,
  transactionCategory: transactionCategory
  });
}
let totalDeposits = 0; 
let totalWithdrawals = 0;

for (let i = 0; i < transactions.length; i++) { 
  if (transactions[ i ].transactionType === "Deposit") { totalDeposits += transactions[ i ].amount; }
 }
for (let i = 0; i < transactions.length; i++) { 
  if (transactions[ i ].transactionType === "Withdrawal") { totalWithdrawals += transactions[ i ].amount; }
 }
