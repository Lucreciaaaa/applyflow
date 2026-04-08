const AppContent = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex h-screen flex-1 flex-col">
      <header className="flex h-16 items-center justify-between border-b border-emerald-900/30 bg-linear-to-r from-[#03271e] to-[#01110d] px-6 backdrop-blur-xl"></header>
      <main className="flex-1 overflow-auto bg-linear-to-r from-[#054031] to-[#011a14] p-6">
        {children}
      </main>
    </div>
  );
};

export default AppContent;
