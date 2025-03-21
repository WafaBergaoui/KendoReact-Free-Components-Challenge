import { NextResponse } from "next/server";
import { CohereClient } from "cohere-ai";

const cohere = new CohereClient({
  token: process.env.COHERE_API_KEY,
});

export async function POST(request) {
  try {
    const { prompt } = await request.json();

    if (!prompt) {
      return NextResponse.json(
        { message: "Prompt is required" },
        { status: 400 }
      );
    }

    const response = await cohere.generate({
      prompt: `You are a helpful financial advisor. Provide clear, concise, and actionable advice in response to user questions. Keep your responses professional and friendly. User: ${prompt} Advisor:`,
      max_tokens: 150, // Limit response length
    });

    const advice = response.generations[0]?.text || "No advice generated.";
    return NextResponse.json({ advice }, { status: 200 });
  } catch (error) {
    console.error("Error fetching AI advice:", error);
    return NextResponse.json(
      { message: "Failed to fetch AI advice" },
      { status: 500 }
    );
  }
}