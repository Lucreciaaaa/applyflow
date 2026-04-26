import Card from "@/components/shared/card";

const LoadingState = () => {
  // TODO : add spinner
  return (
    <Card className="flex flex-2 items-center justify-center">
      <p className="animate-pulse text-emerald-300">Analyzing your profile...</p>
    </Card>
  );
};

export default LoadingState;
