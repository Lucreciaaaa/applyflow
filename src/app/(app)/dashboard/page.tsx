import Priorities from "@/components/features/dashboard/priorities/priorities";
import PageIntro from "@/components/shared/page-intro";

export default function Dashboard() {
  return (
    <div>
      <PageIntro title="Dashboard" subtitle="Welcome back! Here's your job search overview." />
      <Priorities />
    </div>
  );
}
