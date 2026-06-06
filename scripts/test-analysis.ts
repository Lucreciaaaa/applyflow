/* eslint-disable no-console */

import dotenv from "dotenv";
dotenv.config({ path: ".env.local" });

import { runAnalysis } from "../src/core/analysis/services/run-analysis";

import { normalizeJobDescription } from "../src/core/job-description/services/normalize-job-description";

import { normalizeCv } from "../src/core/cv/services/normalize-cv";
import { ParsedCv } from "@/core/cv/types/parsed-cv";

async function main() {
  console.log("Starting ApplyFlow analysis test...\n");

  // Raw inputs

  const rawJobDescription = `
Position: Junior Data Scientist
Location: Paris (Hybrid)
Company: DataDrive Solutions

About the Role:
We are looking for a Junior Data Scientist to join our analytics team. You will help us build predictive models, optimize our data pipelines, and deliver actionable insights to product teams.

Key Responsibilities:
- Clean, transform, and analyze large datasets to uncover user behavior patterns.
- Build and maintain machine learning models (scikit-learn, XGBoost) and deploy them via APIs.
- Write clean, production-ready Python code and optimize complex SQL queries.
- Collaborate with Data Engineers to improve our data infrastructure on AWS.
- Create dashboards (Tableau/PowerBI) to communicate findings to stakeholders.

Requirements:
- Master’s degree in Data Science, Statistics, Computer Science, or a related field.
- 0-2 years of experience (internships count).
- Strong proficiency in Python and SQL (mandatory).
- Hands-on experience with Machine Learning libraries (Scikit-Learn, Pandas).
- Familiarity with Cloud platforms (AWS or GCP) and Git is a strong plus.
- Good communication skills in English.
`;

  const parsedCv: ParsedCv = {
    rawText: `
Lucas Martin
lucas.martin.algo@email.com
Paris, France

Summary:
Recent Data Science graduate passionate about Deep Learning and AI. Looking for a challenging position as a Data Scientist to apply my theoretical knowledge in neural networks.

Skills:
Python, R, MATLAB, Java, TensorFlow, Keras, PyTorch, Pandas, NumPy, Scikit-learn, LaTeX, Git, French (Native), English (Intermediate).

Experience:
Data Science Intern at InnoTech (6 months)
- Developed a Convolutional Neural Network (CNN) for image classification using PyTorch.
- Achieved 85% accuracy on the test set.
- Wrote a technical report and presented results to the research team.

Projects:
- Sentiment Analysis on Twitter: Academic project using NLP (BERT models) to classify tweets.
- Kaggle Competition: Titanic survival prediction (Top 20% using Random Forests).

Education:
M.Sc. in Applied Mathematics & Data Science - Université Paris-Saclay (2025)
B.Sc. in Mathematics - Université de Lille (2023)
`,
    sections: {
      experience:
        "Data Science Intern at InnoTech (6 months) - Developed a Convolutional Neural Network (CNN) for image classification using PyTorch. Achieved 85% accuracy on the test set. Wrote a technical report and presented results to the research team.",
      education:
        "M.Sc. in Applied Mathematics & Data Science - Université Paris-Saclay (2025)\nB.Sc. in Mathematics - Université de Lille (2023)",
      skills:
        "Python, R, MATLAB, Java, TensorFlow, Keras, PyTorch, Pandas, NumPy, Scikit-learn, LaTeX, Git, French (Native), English (Intermediate).",
      projects:
        "Sentiment Analysis on Twitter: Academic project using NLP (BERT models) to classify tweets.\nKaggle Competition: Titanic survival prediction (Top 20% using Random Forests).",
    },
    metadata: {
      sourceType: "raw-text",
      parsedAt: new Date(),
    },
  };

  const normalizedJob = normalizeJobDescription(rawJobDescription);

  const normalizedCv = normalizeCv(parsedCv);
  const hiringContext = normalizedJob.companyType || "general";

  const payload = {
    jobDescription: normalizedJob,
    cv: normalizedCv,
    hiringContext,
  };

  try {
    const start = Date.now();

    const result = await runAnalysis(payload);

    const duration = Date.now() - start;

    console.log("SUCCESS\n");
    console.log("Duration:", duration + "ms\n");

    console.log(JSON.stringify(result, null, 2));
  } catch (err) {
    console.error("FAILED\n");
    console.error(err instanceof Error ? err.message : String(err));
  }
}

main();
