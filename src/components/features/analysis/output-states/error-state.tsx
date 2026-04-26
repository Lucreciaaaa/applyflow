import Card from "@/components/shared/card";

type Props = {
  message: string;
};

const ErrorState = ({ message }: Props) => {
  return (
    <Card className="flex flex-2 items-center justify-center p-6">
      <p className="text-center text-red-400">
        {message || "Something went wrong. Please try again."}
      </p>
    </Card>
  );
};

export default ErrorState;
