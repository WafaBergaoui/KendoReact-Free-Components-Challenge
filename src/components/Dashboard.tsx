"use client";

import { Card, CardTitle, CardBody } from "@progress/kendo-react-layout";
import {
  Chart,
  ChartSeries,
  ChartSeriesItem,
} from "@progress/kendo-react-charts";
import { Grid, GridColumn } from "@progress/kendo-react-grid";
import { Button } from "@progress/kendo-react-buttons";

const DashboardHome = () => {
  // Sample data
  const financialData = {
    totalIncome: 5000,
    totalExpenses: 3000,
    savings: 2000,
    netWorth: 10000,
  };

  const incomeVsExpenses = [
    { month: "Jan", income: 4000, expenses: 2500 },
    { month: "Feb", income: 5000, expenses: 3000 },
    { month: "Mar", income: 6000, expenses: 3500 },
  ];

  const spendingByCategory = [
    { category: "Groceries", amount: 800 },
    { category: "Entertainment", amount: 500 },
    { category: "Utilities", amount: 300 },
    { category: "Transport", amount: 200 },
  ];

  const recentTransactions = [
    { id: 1, date: "2023-10-01", description: "Salary", amount: 5000 },
    { id: 2, date: "2023-10-02", description: "Groceries", amount: -200 },
    { id: 3, date: "2023-10-03", description: "Internet Bill", amount: -50 },
    { id: 4, date: "2023-10-04", description: "Dining Out", amount: -100 },
    { id: 5, date: "2023-10-05", description: "Freelance Work", amount: 1000 },
  ];

  return (
    <div className="container">
      {/* Header */}
      <header className="dashboard-header">
        <select style={{ padding: "5px", borderRadius: "5px" }}>
          <option>This Month</option>
          <option>Last Month</option>
          <option>Custom Range</option>
        </select>
      </header>

      {/* Financial Overview */}
      <div className="financial-overview">
        <Card className="financial-card">
          <CardTitle>Total Income</CardTitle>
          <CardBody style={{ fontSize: "1.2rem", fontWeight: "bold" }}>
            ${financialData.totalIncome}
          </CardBody>
        </Card>
        <Card className="financial-card">
          <CardTitle>Total Expenses</CardTitle>
          <CardBody style={{ fontSize: "1.2rem", fontWeight: "bold" }}>
            ${financialData.totalExpenses}
          </CardBody>
        </Card>
        <Card className="financial-card">
          <CardTitle>Savings</CardTitle>
          <CardBody style={{ fontSize: "1.2rem", fontWeight: "bold" }}>
            ${financialData.savings}
          </CardBody>
        </Card>
        <Card className="financial-card">
          <CardTitle>Net Worth</CardTitle>
          <CardBody style={{ fontSize: "1.2rem", fontWeight: "bold" }}>
            ${financialData.netWorth}
          </CardBody>
        </Card>
      </div>

      {/* Charts */}
      <div className="chart-grid">
        <Card className="chart-card">
          <CardTitle>Income vs. Expenses</CardTitle>
          <CardBody>
            <Chart>
              <ChartSeries>
                <ChartSeriesItem
                  type="column"
                  data={incomeVsExpenses}
                  field="income"
                  categoryField="month"
                  name="Income"
                />
                <ChartSeriesItem
                  type="column"
                  data={incomeVsExpenses}
                  field="expenses"
                  categoryField="month"
                  name="Expenses"
                />
              </ChartSeries>
            </Chart>
          </CardBody>
        </Card>
      </div>
      <div className="chart-grid">
        <Card className="chart-card">
          <CardTitle>Spending by Category</CardTitle>
          <CardBody>
            <Chart>
              <ChartSeries>
                <ChartSeriesItem
                  type="pie"
                  data={spendingByCategory}
                  field="amount"
                  categoryField="category"
                />
              </ChartSeries>
            </Chart>
          </CardBody>
        </Card>
      </div>

      {/* Recent Transactions */}
      <div className="chart-grid">
        <Card className="chart-card">
          <CardTitle>Recent Transactions</CardTitle>
          <CardBody>
            <Grid data={recentTransactions}>
              <GridColumn field="date" title="Date" />
              <GridColumn field="description" title="Description" />
              <GridColumn field="amount" title="Amount" />
            </Grid>
          </CardBody>
        </Card>
      </div>

      {/* Quick Actions */}
      <div className="chart-buttons">
        <Button themeColor="primary">Add Income</Button>
        <Button themeColor="primary">Add Expense</Button>
        <Button themeColor="primary">Set Budget</Button>
        <Button themeColor="primary">Set Goal</Button>
      </div>
    </div>
  );
};

export default DashboardHome;
