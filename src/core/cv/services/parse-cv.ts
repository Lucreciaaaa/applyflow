import axios from "axios";

import { CvSource } from "../types/cv-source";
import { ParsedCv } from "../types/parsed-cv";

type CvSections = ParsedCv["sections"];

function sanitizeText(text: string): string {
  return text.replace(/\r/g, "").replace(/\t/g, " ").replace(/\s+/g, " ").trim();
}

async function getPdfParser() {
  const pdfModule = await import("pdf-parse");
  return pdfModule as unknown as (buffer: Buffer) => Promise<{ text: string }>;
}

// PDF Uploading & Extraction
async function extractPdfText(url: string): Promise<string> {
  const response = await axios.get(url, {
    responseType: "arraybuffer",
  });
  const parsePdf = await getPdfParser();
  const pdfData = await parsePdf(response.data);

  return sanitizeText(pdfData.text);
}

// Extracting a section by title
function extractSection(
  text: string,
  sectionTitles: string[],
  nextSections: string[],
): string | undefined {
  const lowerText = text.toLowerCase();

  const normalize = (str: string) =>
    str.toLowerCase().replace(/[:\-]/g, " ").replace(/\s+/g, " ").trim();

  const normalizedText = normalize(lowerText);

  // 1. find the best start index
  let startIndex = -1;
  let bestMatchLength = 0;

  for (const title of sectionTitles) {
    const normalizedTitle = normalize(title);

    const index = normalizedText.indexOf(normalizedTitle);

    if (index !== -1) {
      // prefer longer, more specific matches
      if (normalizedTitle.length > bestMatchLength) {
        bestMatchLength = normalizedTitle.length;
        startIndex = index;
      }
    }
  }

  if (startIndex === -1) return undefined;

  // 2. find end index
  let endIndex = text.length;

  for (const next of nextSections) {
    const normalizedNext = normalize(next);

    const index = normalizedText.indexOf(normalizedNext, startIndex + 1);

    if (index !== -1 && index < endIndex) {
      endIndex = index;
    }
  }

  // 3. extract result
  const result = text.slice(startIndex, endIndex).trim();

  // + safety check
  if (result.length < 20) return undefined;

  // avoid garbage headers-only matches
  const wordCount = result.split(" ").length;
  if (wordCount < 5) return undefined;

  return result;
}

// Extracting all sections
function extractSections(rawText: string): CvSections {
  return {
    experience: extractSection(
      rawText,
      ["experience", "work experience"],
      ["education", "skills", "projects"],
    ),

    education: extractSection(rawText, ["education"], ["experience", "skills", "projects"]),

    skills: extractSection(
      rawText,
      ["skills", "technologies", "tech stack"],
      ["experience", "education", "projects"],
    ),

    projects: extractSection(rawText, ["projects"], ["experience", "education", "skills"]),
  };
}

export async function parseCv(cvSource: CvSource): Promise<ParsedCv> {
  try {
    const rawText =
      cvSource.type === "raw-text"
        ? sanitizeText(cvSource.text)
        : await extractPdfText(cvSource.url);

    return {
      rawText,

      sections: extractSections(rawText),

      metadata: {
        sourceType: cvSource.type,
        parsedAt: new Date(),
      },
    };
  } catch (error) {
    console.error(error);
    throw new Error("Failed to parse CV");
  }
}
