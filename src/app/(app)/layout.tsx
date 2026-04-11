import AppContent from "@/components/layout/app-content";
import AppSidebar from "@/components/layout/app-sidebar";

type Props = {
  children: React.ReactNode;
};

export default function AppLayout({ children }: Props) {
  return (
    <div>
      {/* Desktop */}
      <div className="hidden h-screen flex-row lg:flex">
        <AppSidebar />
        <AppContent>{children}</AppContent>
      </div>

      {/* Mobile */}
      <div className="flex h-screen flex-col items-center justify-center gap-5 bg-linear-to-r from-[#054031] to-[#011a14] p-10 lg:hidden">
        <h1 className="text-4xl font-semibold text-white"> ApplyFlow</h1>

        <h2 className="text-center text-xl font-medium text-white">
          This app is designed for desktop use
        </h2>
        <p className="max-w-sm text-center text-sm text-gray-400">
          Please access it from a larger screen to manage your applications.
        </p>
      </div>
    </div>
  );
}
