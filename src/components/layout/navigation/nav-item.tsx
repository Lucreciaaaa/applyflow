"use client";

import { LucideIcon } from "lucide-react";

import Link from "next/link";

import { usePathname } from "next/navigation";

type NavItemProps = {
  title: string;
  href: string;
  icon: LucideIcon;
};

const NavItem = ({ title, href, icon }: NavItemProps) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  const Icon = icon;

  return (
    <Link
      href={href}
      className={`flex w-full items-center gap-3 rounded-lg px-4 py-2.5 text-sm ${
        isActive
          ? "border border-emerald-500/30 bg-emerald-500/20 text-emerald-300"
          : "text-gray-300 hover:bg-white/5"
      } `}
    >
      <Icon className="h-5 w-5 shrink-0" />
      <span>{title}</span>
    </Link>
  );
};

export default NavItem;
