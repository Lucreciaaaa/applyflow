import { LucideIcon } from "lucide-react";

import Link from "next/link";

type NavItemProps = {
  title: string;
  href: string;
  icon: LucideIcon;
  isActive: boolean;
};

const NavItem = ({ title, href, icon, isActive }: NavItemProps) => {
  const Icon = icon;

  return (
    <Link
      aria-current={isActive ? "page" : undefined}
      href={href}
      className={`flex w-full items-center gap-3 rounded-lg px-4 py-2.5 text-sm focus-visible:ring-2 ${
        isActive
          ? "border border-emerald-500/30 bg-emerald-500/20 text-emerald-300"
          : "text-gray-300 transition-all hover:bg-white/5"
      } `}
    >
      <Icon aria-hidden="true" className="h-5 w-5 shrink-0" />
      <span>{title}</span>
    </Link>
  );
};

export default NavItem;
