import AppContent from "@/components/layout/app-content";
import AppTopbar from "@/components/layout/app-topbar";

type Props = {
  children: React.ReactNode;
};

export default function AppLayout({ children }: Props) {
  return (
    <>
      {/* Desktop */}
      <div className="hidden min-h-screen flex-col lg:flex">
        <AppTopbar />
        <AppContent>{children}</AppContent>
      </div>

      {/* Mobile */}
      <div className="flex h-screen flex-col items-center justify-center gap-5 bg-linear-to-r from-[#00a871] to-[#004231] p-10 lg:hidden">
        <h1 className="text-4xl font-semibold text-white"> ApplyFlow</h1>

        <h2 className="text-center text-xl font-medium text-white">
          This app is designed for desktop use
        </h2>
        <p className="max-w-sm text-center text-sm text-gray-300">
          Please access it from a larger screen to manage your applications.
        </p>
      </div>
    </>
  );
}
