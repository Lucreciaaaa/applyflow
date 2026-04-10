"use client";

import { BarChart3, FileText, LayoutDashboard, Sparkles, Settings } from "lucide-react";
import NavItem from "./navigation/nav-item";

const AppSidebar = () => {
  const navigationItems = [
    { title: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
    { title: "Applications", href: "/applications", icon: FileText },
    { title: "Analytics", href: "/analytics", icon: BarChart3 },
    { title: "Job Analyzer", href: "/analyzer", icon: Sparkles },
  ];
  const settingsItem = { title: "Settings", href: "/settings", icon: Settings };

  return (
    <aside className="flex h-screen w-64 shrink-0 flex-col border-r border-emerald-900/30 bg-[linear-gradient(to_bottom,var(--sidebar-gradient-from),var(--sidebar-gradient-to))] backdrop-blur-xl">
      {/* header */}
      <div className="border-b border-gray-700/50 p-6">
        <h1 className="text-lg font-semibold text-white">ApplyFlow</h1>
      </div>

      {/* navbar */}
      <nav className="flex flex-1 flex-col space-y-1 border-t border-emerald-900/30 p-4">
        {navigationItems.map((item) => (
          <NavItem key={item.href} title={item.title} href={item.href} icon={item.icon} />
        ))}
      </nav>

      {/* footer */}
      <div className="border-t border-gray-700/50 p-6">
        <NavItem
          key={settingsItem.href}
          title={settingsItem.title}
          href={settingsItem.href}
          icon={settingsItem.icon}
        />
      </div>
    </aside>
  );
};

export default AppSidebar;
