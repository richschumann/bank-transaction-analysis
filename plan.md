The request:

A banking analysis dashboard that consolidates KPI's, branch comparisons, and transaction data into one dashboard, helping regional bank decision-makers monitor performance, evaluate goals, and identify areas of improvement.

Questions to ask:
1. Who is the primary user? 
The primary users will be regional bank managers, and executive leadership
2. Which KPIs matter most? 
Priority KPI’s will be, Total deposits, total withdrawals, transaction count, and net transaction activity, which will be calculated using the difference in total deposits and total withdrawals.
3. How many branches will you compare? 
It will be comparing data from 3 separate branches
4. What transaction data will you include? 
It with use transaction ID, transaction date, transaction branch, transaction amount, 4 transaction types: deposits, withdrawals, transfers, and payments, and 4 transaction categories: personal banking, business banking, retail, and utilities.
5. What should the dashboard help someone identify? 
It will help to identify: High and low-performing branches, Branch transaction patterns, deposit and withdrawal trends.
6. Time period: Will your dashboard analyze one month, one quarter, or a full year of transactions?
The analysis will span 3 months (1 quarter) of data transactions.
7. Data source: Will you use invented sample banking data, or do you already have a dataset? 
All data used will be invented for security reasons.
8. Branch performance: How will you determine whether a branch is performing well?
Branch performance will be determined by net transaction activity.
Inputs:
The dashboard will use:
Transaction ID
Transaction date
Branch
Transaction type
Transaction category
Transaction amount
User-selected branch
User-selected reporting period (monthly or quarterly)

Steps:
The program will:
Read the transaction records.
Apply the selected monthly or quarterly reporting period.
Filter transactions by the selected branch, when applicable.
Calculate total deposits.
Calculate total withdrawals.
Count transactions.
Calculate net transaction activity.
Rank all three branches from highest to lowest net transaction activity.
Display the results in KPI cards.
5. Outputs:
dashboard will display:
Total Deposits — sum of deposit transactions.
Total Withdrawals — sum of withdrawal transactions.
Transaction Count — number of qualifying transactions.
Net Transaction Activity — deposits minus withdrawals.
Branch Ranking — highest to lowest net transaction activity.
Each KPI card will be clickable to display individual branch KPI details.
6. Test Cases:
We'll begin with a small invented dataset.
Here is a sample set of transactions to use for testing:
ID
Branch
Type
Amount
T001
North
Deposit
$1,000
T002
North
Withdrawal
$200
T003
South
Deposit
$800
T004
South
Withdrawal
$300
T005
East
Deposit
$1,200
T006
East
Withdrawal
$400

Expected results:
Branch
Deposits
Withdrawals
Net activity
North
$1,000
$200
$800
South
$800
$300
$500
East
$1,200
$400
$800

Expected ranking:
North and East — tied at $800.
South — $500.
Why: Net transaction activity is calculated by subtracting withdrawals from deposits.
Empty reporting period: Display "No transactions found." rather than showing zero-value KPI cards.
7. Pseudocode:
START

LOAD invented transaction records

DISPLAY monthly and quarterly reporting options

USER SELECTS reporting period

USER SELECTS branch or All branches

FILTER transactions by selected reporting period

IF no transactions are found
    DISPLAY "No transactions found."

ELSE
    IF All branches is selected

        CALCULATE KPIs for all three branches
            Total deposits
            Total withdrawals
            Transaction count
            Net transaction activity

        RANK all three branches
            HIGHEST net transaction activity FIRST

        DISPLAY KPI cards for all three branches
        DISPLAY branch ranking

        WHEN user clicks a KPI card
            DISPLAY that KPI's details for each branch
        END WHEN

    ELSE

        FILTER transactions for selected branch

        IF no transactions are found
            DISPLAY "No transactions found."
        ELSE
            CALCULATE KPIs for selected branch
            DISPLAY KPI cards for selected branch

            WHEN user clicks a KPI card
                DISPLAY selected branch's KPI details
            END WHEN
        END IF

    END IF
END IF

END




