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
          onSubmit={(values: { [name: string]: unknown }) => {
            // Validate the shape of the values object
            if (
              typeof values.category === "string" &&
              typeof values.amount === "number"
            ) {
              const data: BudgetForm = {
                category: values.category,
                amount: values.amount,
              };
              alert(JSON.stringify(data));
            } else {
              console.error("Invalid form data");
            }
          }}
          render={(formRenderProps) => (
            <FormElement>
              <Field className="input" name="category" label="Category" component={Input} />
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