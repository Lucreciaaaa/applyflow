const AppContent = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex h-screen flex-1 flex-row">
      <main className="flex-1 overflow-auto bg-linear-to-r from-[#00a871] to-[#004231] p-6">
        {children}
      </main>
    </div>
  );
};

export default AppContent;
