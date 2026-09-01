"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Bot,
  CalendarDays,
  CheckSquare,
  ChevronLeft,
  ChevronRight,
  CircleDot,
  FolderKanban,
  LayoutDashboard,
  Network,
  Settings,
  Target,
  Timer,
  UserRound,
} from "lucide-react";
import { useState } from "react";
import "./Sidebar.css";

const navigation = [
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
    icon: CircleDot,
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
    icon: Bot,
  },
];

export default function Sidebar() {
  const pathname = usePathname();

  const [collapsed, setCollapsed] =
    useState(false);

  function isActive(href) {
    if (href === "/dashboard") {
      return pathname === "/dashboard";
    }

    return pathname.startsWith(href);
  }

  return (
    <aside
      className={
        collapsed
          ? "sidebar sidebar-collapsed"
          : "sidebar"
      }
    >
      <div className="sidebar-top">
        <Link
          href="/dashboard"
          className="sidebar-logo"
        >
          <span className="sidebar-logo-icon">
            ✦
          </span>

          {!collapsed && (
            <span className="sidebar-logo-text">
              LifeOS
            </span>
          )}
        </Link>

        <button
          type="button"
          className="sidebar-collapse-button"
          onClick={() =>
            setCollapsed(!collapsed)
          }
          aria-label={
            collapsed
              ? "Expand sidebar"
              : "Collapse sidebar"
          }
          title={
            collapsed
              ? "Expand sidebar"
              : "Collapse sidebar"
          }
        >
          {collapsed ? (
            <ChevronRight size={16} />
          ) : (
            <ChevronLeft size={16} />
          )}
        </button>
      </div>

      <nav className="sidebar-navigation">
        {navigation.map((item) => {
          const Icon = item.icon;

          return (
            <Link
              href={item.href}
              key={item.href}
              className={
                isActive(item.href)
                  ? "sidebar-link active"
                  : "sidebar-link"
              }
              title={
                collapsed
                  ? item.label
                  : undefined
              }
            >
              <span className="sidebar-link-icon">
                <Icon size={18} />
              </span>

              {!collapsed && (
                <span>{item.label}</span>
              )}
            </Link>
          );
        })}
      </nav>

      <div className="sidebar-bottom">
        <Link
          href="/settings"
          className={
            isActive("/settings")
              ? "sidebar-link active"
              : "sidebar-link"
          }
          title={
            collapsed
              ? "Settings"
              : undefined
          }
        >
          <span className="sidebar-link-icon">
            <Settings size={18} />
          </span>

          {!collapsed && (
            <span>Settings</span>
          )}
        </Link>

        <div className="sidebar-profile">
          <div className="sidebar-avatar">
            <UserRound size={18} />
          </div>

          {!collapsed && (
            <>
              <div className="sidebar-profile-info">
                <strong>LifeOS User</strong>
                <span>Free plan</span>
              </div>

              <button
                type="button"
                className="sidebar-profile-button"
                aria-label="Profile options"
              >
                •••
              </button>
            </>
          )}
        </div>
      </div>
    </aside>
  );
}