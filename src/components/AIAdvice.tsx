"use client";

import { useState } from "react";
import { Button } from "@progress/kendo-react-buttons";
import { getAIAdvice } from "../services/aiService";

export default function AIAdvice() {
  const [prompt, setPrompt] = useState("");
  const [advice, setAdvice] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    await getAIAdvice(prompt, setAdvice, setLoading);
  };

  return (
    <div className="container">
      <h1 className="title">AI Advice</h1>
      <form onSubmit={handleSubmit}>
        <textarea
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="Ask for financial advice..."
          className="financeAdviceArea"
          rows={4}
          required
        />
        <Button type="submit" disabled={loading} className="submitButton">
          {loading ? "Generating..." : "Get Advice"}
        </Button>
      </form>

      {advice && (
        <div className="adviceform">
          <h2>Advice:</h2>
          <p>{advice}</p>
        </div>
      )}
    </div>
  );
}
