"use client";

import { Grid, GridColumn } from "@progress/kendo-react-grid";

interface Transaction {
  id: number;
  date: string;
  description: string;
  amount: number;
}

const transactions: Transaction[] = [
  { id: 1, date: "2023-10-01", description: "Salary", amount: 5000 },
  { id: 2, date: "2023-10-02", description: "Groceries", amount: -200 },
  { id: 3, date: "2023-10-03", description: "Internet Bill", amount: -50 },
  { id: 4, date: "2023-10-04", description: "Dining Out", amount: -100 },
  { id: 5, date: "2023-10-05", description: "Freelance Work", amount: 1000 },
];

const TransactionHistory = () => (
  <div className="container">
    <h1 className="title">Transaction History</h1>
    <Grid data={transactions}>
      <GridColumn field="date" title="Date" />
      <GridColumn field="description" title="Description" />
      <GridColumn field="amount" title="Amount" />
    </Grid>
  </div>
);

export default TransactionHistory;
