"use client";

import { Form, Field, FormElement } from "@progress/kendo-react-form";
import { Input } from "@progress/kendo-react-inputs";
import { Button } from "@progress/kendo-react-buttons";

interface BudgetForm {
  category: string;
  amount: number;
}

const BudgetPlanner = () => {
  return (
    <div className="container">
      <h1 className="title">Budget Planner</h1>
      <p className="subtitle">
        Set your monthly budget for different categories. Enter the category and
        amount below.
      </p>
      <div className="formContainer">
        <Form
          onSubmit={(data: BudgetForm) => {
            alert(JSON.stringify(data));
          }}
          render={(formRenderProps) => (
            <FormElement>
              <Field className="input" label="Category" component={Input} />
              <Field
                className="input"
                name="amount"
                label="Amount"
                component={Input}
                type="number"
              />
              <Button
                className="submitButton"
                type="submit"
                disabled={!formRenderProps.allowSubmit}
              >
                Set Budget
              </Button>
            </FormElement>
          )}
        />
      </div>
    </div>
  );
};

export default BudgetPlanner;
