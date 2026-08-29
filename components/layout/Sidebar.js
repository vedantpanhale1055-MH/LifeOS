"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import {
  LayoutDashboard,
  CheckSquare,
  FolderKanban,
  Repeat2,
  CalendarDays,
  Timer,
  Target,
  Sparkles,
  Settings,
  Network,
} from "lucide-react";

import "./Sidebar.css";

const navItems = [
  {
    label: "Today",
    href: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    label: "Tasks",
    href: "/tasks",
    icon: CheckSquare,
  },
  {
    label: "Projects",
    href: "/projects",
    icon: FolderKanban,
  },
  {
    label: "Habits",
    href: "/habits",
    icon: Repeat2,
  },
  {
    label: "Calendar",
    href: "/calendar",
    icon: CalendarDays,
  },
  {
    label: "Focus",
    href: "/focus",
    icon: Timer,
  },
  {
    label: "Goals",
    href: "/goals",
    icon: Target,
  },
  {
    label: "Life Graph",
    href: "/life-graph",
    icon: Network,
  },
  {
    label: "AI Assistant",
    href: "/assistant",
    icon: Sparkles,
  },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="sidebar">
      <Link href="/dashboard" className="sidebar-logo">
        <div className="sidebar-logo-icon">
          ✦
        </div>

        <span>LifeOS</span>
      </Link>

      <nav className="sidebar-nav">
        {navItems.map((item) => {
          const Icon = item.icon;

          const active =
            pathname === item.href ||
            pathname.startsWith(`${item.href}/`);

          return (
            <Link
              key={item.href}
              href={item.href}
              className={
                active
                  ? "sidebar-link active"
                  : "sidebar-link"
              }
            >
              <Icon size={17} />
              <span>{item.label}</span>
            </Link>
          );
        })}
      </nav>

      <div className="sidebar-bottom">
        <Link
          href="/settings"
          className="sidebar-settings"
        >
          <Settings size={17} />
          <span>Settings</span>
        </Link>

        <div className="sidebar-user">
          <div className="sidebar-avatar">
            V
          </div>

          <div>
            <div className="sidebar-user-name">
              Vedant
            </div>

            <div className="sidebar-user-plan">
              Pro Plan
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}