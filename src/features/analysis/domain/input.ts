type CvSource = { type: "url"; url: string } | { type: "raw-text"; text: string };

export type AnalysisInput = {
  cvSource: CvSource;
  jobDescription: string;
};

export type ParsedCv = {
  text: string;
  sourceType: CvSource["type"];
  parsedAt: Date;
};
