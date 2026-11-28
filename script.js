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
  amount = 500 + ( i % 20 ) * 500 + 2000;
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
  amount = 500 + ( i % 20 ) * 500 + 4000;
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

const totalDepositsElement = document.getElementById("total-deposits");
const totalWithdrawalsElement = document.getElementById("total-withdrawals");
const netTransactionActivityElement = document.getElementById("net-transaction-activity");

const selectedBranch = branchSelect.value;

function filterTransactions(selectedBranch) {

const branchTransactions = transactions.filter(function(transaction) {
  return transaction.branchName === selectedBranch;
});   
  
let totalDeposits = 0;
  
for (let i = 0; i < branchTransactions.length; i++) { 
  if (branchTransactions[i].transactionType === "Deposit") { 
  totalDeposits += branchTransactions[ i ].amount; 
  } 
}
  let totalWithdrawals = 0;

for (let i = 0; i < branchTransactions.length; i++) { 
  if (branchTransactions[ i ].transactionType === "Withdrawal") { totalWithdrawals += branchTransactions[ i ].amount; 
 } 
}
const netTransactionActivity = totalDeposits - totalWithdrawals;

totalDepositsElement.textContent = totalDeposits.toLocaleString("en-US", { style: "currency", currency: "USD" });
totalWithdrawalsElement.textContent = totalWithdrawals.toLocaleString("en-US", { style: "currency", currency: "USD" });

netTransactionActivityElement.textContent = netTransactionActivity.toLocaleString("en-US", { style: "currency", currency: "USD" }); 
}
branchSelect.addEventListener("change", function(event) { 
  let selectedBranch = branchSelect.value;
  filterTransactions(selectedBranch);
});
filterTransactions(selectedBranch);
const branchNames = [ "North Branch", "South Branch", "Central Branch" ];
const branchRankings = [];

for (let i = 0; i < branchNames.length; i++) { let netTransactionActivity = 0;
  const currentBranch = branchNames[i];
const branchTransactions = transactions.filter(function(transaction) {
  return transaction.branchName === currentBranch;
  });
let totalDeposits = 0;
let totalWithdrawals = 0;
                                               
for (let j = 0; j < branchTransactions.length; j++) {
  if (branchTransactions[j].transactionType === "Deposit") { totalDeposits += branchTransactions[j].amount;}
  if (branchTransactions[j].transactionType === "Withdrawal") { totalWithdrawals += branchTransactions[j].amount;}
}
netTransactionActivity = totalDeposits - totalWithdrawals;
                                               
branchRankings.push({ branchName: currentBranch, netTransactionActivity: netTransactionActivity
  });
}
branchRankings.sort(function(a, b) {            
  return b.netTransactionActivity - a.netTransactionActivity;
  });

const branchRankingsElement = document.getElementById("branch-rankings");

for (let i = 0; i < branchRankings.length; i++) {
  const rankingItem = document.createElement("li");                                               
rankingItem.textContent = branchRankings[i].branchName  + " - " + branchRankings[i].netTransactionActivity.toLocaleString("en-US", { style: "currency", currency: "USD"});          branchRankingsElement.appendChild(rankingItem); 
}
