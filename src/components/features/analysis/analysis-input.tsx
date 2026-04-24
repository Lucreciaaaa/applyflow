"use client";

import Card from "@/components/shared/card";

type InputProps = {
  onSubmit: () => void;
  disabled: boolean;
};

const AnalysisInput = ({ disabled, onSubmit }: InputProps) => {
  /* TODO :
  const [file, setFile] = useState<File | null>(null);
  const [jobDescription, setJobDescription] = useState(""); */

  return (
    <Card className="flex flex-1 flex-col gap-6">
      {/* upload */}
      {/* textarea */}
      <button onClick={onSubmit} disabled={disabled} className="text-white">
        Analyze CV
      </button>
    </Card>
  );
};
export default AnalysisInput;
