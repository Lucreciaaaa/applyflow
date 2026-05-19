export function extractJson(content: string): string | null {
  // markdown json
  const markdownMatch = content.match(/```json\s*([\s\S]*?)\s*```/i);

  if (markdownMatch) {
    return markdownMatch[1];
  }

  // fallback balanced braces
  const start = content.indexOf("{");

  if (start === -1) {
    return null;
  }

  let depth = 0;

  for (let i = start; i < content.length; i++) {
    const char = content[i];

    if (char === "{") depth++;
    if (char === "}") depth--;

    if (depth === 0) {
      return content.slice(start, i + 1);
    }
  }

  return null;
}
