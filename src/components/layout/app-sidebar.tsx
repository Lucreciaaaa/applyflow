"use client";

import NavItem from "./navigation/nav-item";

import { navigationItems, settingItem } from "@/config/navigation";

import { usePathname } from "next/navigation";

const AppSidebar = () => {
  const pathname = usePathname();

  return (
    <aside className="flex h-screen w-64 shrink-0 flex-col border-r border-emerald-900/30 bg-[linear-gradient(to_bottom,var(--sidebar-gradient-from),var(--sidebar-gradient-to))] backdrop-blur-xl">
      {/* header */}
      <div className="border-b border-gray-700/50 p-6">
        <h1 className="text-lg font-semibold text-white">ApplyFlow</h1>
      </div>

      {/* navbar */}
      <nav
        aria-label="Main Navigation"
        className="flex flex-1 flex-col space-y-1 border-t border-emerald-900/30 p-4"
      >
        {navigationItems.map((item) => (
          <NavItem
            key={item.href}
            title={item.title}
            href={item.href}
            icon={item.icon}
            isActive={pathname.startsWith(item.href) || pathname === item.href}
          />
        ))}
      </nav>

      {/* footer */}
      <div className="border-t border-gray-700/50 p-6">
        <NavItem
          key={settingItem.href}
          title={settingItem.title}
          href={settingItem.href}
          icon={settingItem.icon}
          isActive={pathname.startsWith(settingItem.href) || pathname === settingItem.href}
        />
      </div>
    </aside>
  );
};

export default AppSidebar;
