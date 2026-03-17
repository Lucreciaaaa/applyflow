import AppContent from "@/components/layout/app-content";
import AppSidebar from "@/components/layout/app-sidebar";

type Props = {
  children: React.ReactNode;
};

export default function AppLayout({ children }: Props) {
  return (
    <div className="flex h-screen flex-row">
      <AppSidebar />
      <AppContent>{children}</AppContent>
    </div>
  );
}
