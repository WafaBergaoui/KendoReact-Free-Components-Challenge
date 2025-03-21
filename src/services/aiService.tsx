export const getAIAdvice = async (
  prompt: string,
  setAdvice: (advice: string) => void,
  setLoading: (loading: boolean) => void
) => {
  setLoading(true);
  try {
    const response = await fetch("/api/ai", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ prompt }),
    });

    const data = await response.json();
    setAdvice(data.advice);
  } catch (error) {
    console.error("Error:", error);
    setAdvice("Failed to fetch advice. Please try again.");
  } finally {
    setLoading(false);
  }
};
