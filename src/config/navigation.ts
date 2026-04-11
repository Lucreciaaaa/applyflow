import { BarChart3, FileText, LayoutDashboard, Sparkles, Settings } from "lucide-react";

export const navigationItems = [
  { title: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
  { title: "Applications", href: "/applications", icon: FileText },
  { title: "Analytics", href: "/analytics", icon: BarChart3 },
  { title: "Job Analyzer", href: "/job-analyzer", icon: Sparkles },
];
export const settingItem = { title: "Settings", href: "/settings", icon: Settings };
