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

const branchSelect = document.getElementById("branch-select");

const selectedBranch = branchSelect.value;

const branchTransactions = transactions.filter(function(transaction) {
  return transaction.branchName === selectedBranch;
});

let totalDeposits = 0; 
let totalWithdrawals = 0;

for (let i = 0; i < branchTransactions.length; i++) { 
  if (branchTransactions[i].transactionType === "Deposit") { 
  totalDeposits += branchTransactions[ i ].amount; }
 }

for (let i = 0; i < branchTransactions.length; i++) { 
  if (branchTransactions[ i ].transactionType === "Withdrawal") { totalWithdrawals += branchTransactions[ i ].amount; }
 }

const netTransactionActivity = totalDeposits - totalWithdrawals;

const totalDepositsElement = document.getElementById("total-deposits");

const totalWithdrawalsElement = document.getElementById("total-withdrawals");

const netTransactionActivityElement = document.getElementById("net-transaction-activity");

totalDepositsElement.textContent = totalDeposits.toLocaleString("en-US", { style: "currency", currency: "USD" });

totalWithdrawalsElement.textContent = totalWithdrawals.toLocaleString("en-US", { style: "currency", currency: "USD" });

netTransactionActivityElement.textContent = netTransactionActivity.toLocaleString("en-US", { style: "currency", currency: "USD" });

console.log(branchTransactions.length);
