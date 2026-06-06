export async function callOpenRouter(prompt: string, model: string) {
  const res = await fetch("http://127.0.0.1:11434/api/generate", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      model,
      prompt,
      stream: false,
      options: { temperature: 0.3 },
    }),
  });

  if (!res.ok) {
    const text = await res.text();
    throw new Error(`Ollama error ${res.status}: ${text}`);
  }

  const json = await res.json();

  const text = json?.response;

  if (typeof text !== "string") {
    throw new Error("Ollama: no response in output");
  }

  return text;
}
