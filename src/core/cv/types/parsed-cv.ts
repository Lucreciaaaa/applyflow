import { CvSource } from "./cv-source";

export type ParsedCv = {
  rawText: string;

  sections: {
    experience?: string;
    education?: string;
    skills?: string;
    projects?: string;
  };

  metadata: {
    sourceType: CvSource["type"];
    parsedAt: Date;
  };
};
