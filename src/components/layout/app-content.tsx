const AppContent = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-1">
      <main className="flex-1 bg-linear-to-r from-[#00a871] to-[#004231] p-6">{children}</main>
    </div>
  );
};

export default AppContent;
