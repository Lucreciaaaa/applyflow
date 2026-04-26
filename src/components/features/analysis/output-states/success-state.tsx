import Card from "@/components/shared/card";

type Props = {
  data: {
    matchScore: number;
    missingSkills: string[];
    redFlags: string[];
    suggestions: string[];
  };
};

const SuccessState = ({ data }: Props) => {
  return (
    <Card className="flex flex-2 flex-col gap-4 p-6 text-white">
      <h3 className="text-xl font-semibold">Match Score: {data.matchScore}%</h3>

      <div>
        <h4 className="font-medium">Missing Skills</h4>
        <ul className="list-inside list-disc text-sm text-emerald-200">
          {data.missingSkills.map((skill, i) => (
            <li key={i}>{skill}</li>
          ))}
        </ul>
      </div>

      <div>
        <h4 className="font-medium">Red Flags</h4>
        <ul className="list-inside list-disc text-sm text-red-300">
          {data.redFlags.map((flag, i) => (
            <li key={i}>{flag}</li>
          ))}
        </ul>
      </div>

      <div>
        <h4 className="font-medium">Suggestions</h4>
        <ul className="list-inside list-disc text-sm text-emerald-200">
          {data.suggestions.map((s, i) => (
            <li key={i}>{s}</li>
          ))}
        </ul>
      </div>
    </Card>
  );
};

export default SuccessState;
