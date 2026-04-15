import { Priority } from "@/lib/data/dashboard/priorities/priorities.types";
import { priorityStyles } from "./priority.styles";

import { formatDistanceToNow } from "date-fns";

type Props = {
  pItem: Priority;
};

const PriorityItem = ({ pItem }: Props) => {
  return (
    <div
      className={`mb-3 flex items-center rounded-lg border-l-4 p-4 transition-all ${priorityStyles[pItem.type]}`}
    >
      <div className="flex flex-col">
        <p className="text-sm text-gray-200">{pItem.label}</p>
        {pItem.date && (
          <span className="text-xs text-gray-400">{formatDistanceToNow(pItem.date)}</span>
        )}
      </div>
    </div>
  );
};

export default PriorityItem;
