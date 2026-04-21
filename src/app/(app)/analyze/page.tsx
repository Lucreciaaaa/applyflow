import Card from "@/components/shared/card";

export default function JobAnalyzer() {
  return (
    <div className="mx-auto w-full max-w-6xl">
      <div className="grid grid-cols-2 gap-6">
        <Card>
          <h1 className="text-white">Input</h1>
        </Card>

        <Card>
          <h1 className="text-white">Output</h1>
        </Card>
      </div>
    </div>
  );
}
