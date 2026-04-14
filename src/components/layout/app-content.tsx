import AppTopbar from "./app-topbar";

const AppContent = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex h-screen flex-1 flex-col">
      <AppTopbar />

      <main className="flex-1 overflow-auto bg-linear-to-r from-[#054031] to-[#011a14] p-6">
        {children}
      </main>
    </div>
  );
};

export default AppContent;
