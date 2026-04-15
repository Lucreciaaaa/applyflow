import Card from "@/components/shared/card";
import { getPriorities } from "@/lib/data/dashboard/priorities/get-priorities";
import PriorityItem from "./priority-item";

const Priorities = async () => {
  const priorities = await getPriorities();

  return (
    <Card className="flex flex-col gap-6 p-6">
      <h4 className="text-sm font-semibold text-white">Today's priorities</h4>

      <div className="space-y-3">
        {priorities.map((item) => (
          <PriorityItem key={item.id} pItem={item} />
        ))}
      </div>
    </Card>
  );
};

export default Priorities;
