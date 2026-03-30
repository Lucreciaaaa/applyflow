const AppSidebar = () => {
  // add gradient color in config
  return (
    <aside className="flex w-64 shrink-0 flex-col border-r border-emerald-900/30 bg-[linear-gradient(to_bottom,var(--sidebar-gradient-from),var(--sidebar-gradient-to))] backdrop-blur-xl">
      <div className="border-b border-gray-700/50 p-6">
        <h1 className="text-xl font-semibold text-white">ApplyFlow</h1>
      </div>
    </aside>
  );
};

export default AppSidebar;
