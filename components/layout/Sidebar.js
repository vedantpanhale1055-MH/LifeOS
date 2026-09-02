"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import {
  CalendarDays,
  ChevronLeft,
  ChevronRight,
  CircleDot,
  Crosshair,
  FolderKanban,
  Gauge,
  GitBranch,
  ListTodo,
  Moon,
  Settings,
  Sparkles,
  Sun,
  Target,
} from "lucide-react";

import "./Sidebar.css";

const navigation = [
  {
    label: "Today",
    href: "/dashboard",
    icon: Gauge,
    accent: "purple",
  },
  {
    label: "Tasks",
    href: "/tasks",
    icon: ListTodo,
    accent: "blue",
  },
  {
    label: "Projects",
    href: "/projects",
    icon: FolderKanban,
    accent: "indigo",
  },
  {
    label: "Habits",
    href: "/habits",
    icon: CircleDot,
    accent: "green",
  },
  {
    label: "Calendar",
    href: "/calendar",
    icon: CalendarDays,
    accent: "blue",
  },
  {
    label: "Focus",
    href: "/focus",
    icon: Crosshair,
    accent: "green",
  },
  {
    label: "Goals",
    href: "/goals",
    icon: Target,
    accent: "orange",
  },
];

const intelligenceNavigation = [
  {
    label: "Life Graph",
    href: "/life-graph",
    icon: GitBranch,
    accent: "pink",
  },
  {
    label: "AI Assistant",
    href: "/ai-assistant",
    icon: Sparkles,
    accent: "purple",
    badge: "AI",
  },
];

export default function Sidebar() {
  const pathname = usePathname();

  const [collapsed, setCollapsed] =
    useState(false);

  const [theme, setTheme] =
    useState("dark");

  useEffect(() => {
    const savedTheme =
      localStorage.getItem("lifeos-theme") ||
      "dark";

    setTheme(savedTheme);

    document.documentElement.setAttribute(
      "data-theme",
      savedTheme
    );
  }, []);

  function toggleTheme() {
    const nextTheme =
      theme === "dark"
        ? "light"
        : "dark";

    setTheme(nextTheme);

    localStorage.setItem(
      "lifeos-theme",
      nextTheme
    );

    document.documentElement.setAttribute(
      "data-theme",
      nextTheme
    );
  }

  function isActive(href) {
    if (href === "/dashboard") {
      return pathname === "/dashboard";
    }

    return pathname.startsWith(href);
  }

  return (
    <aside
      className={`life-sidebar ${
        collapsed ? "is-collapsed" : ""
      }`}
    >
      <div className="sidebar-brand-row">
        <Link
          href="/dashboard"
          className="sidebar-brand"
        >
          <div className="sidebar-brand-mark">
            <Sparkles size={17} />
          </div>

          {!collapsed && (
            <div className="sidebar-brand-copy">
              <strong>LifeOS</strong>
              <span>
                Personal workspace
              </span>
            </div>
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
        >
          {collapsed ? (
            <ChevronRight size={15} />
          ) : (
            <ChevronLeft size={15} />
          )}
        </button>
      </div>

      <div className="sidebar-workspace">
        <div className="workspace-icon">
          V
        </div>

        {!collapsed && (
          <>
            <div className="workspace-copy">
              <strong>
                My Workspace
              </strong>

              <span>
                Personal
              </span>
            </div>

            <span className="workspace-plan">
              Free
            </span>
          </>
        )}
      </div>

      <nav className="sidebar-navigation">
        {!collapsed && (
          <p className="sidebar-group-label">
            Workspace
          </p>
        )}

        <div className="sidebar-nav-list">
          {navigation.map((item) => {
            const Icon = item.icon;

            return (
              <Link
                key={item.href}
                href={item.href}
                title={
                  collapsed
                    ? item.label
                    : undefined
                }
                className={`sidebar-link ${
                  isActive(item.href)
                    ? "active"
                    : ""
                }`}
              >
                <span
                  className={`sidebar-link-icon ${item.accent}`}
                >
                  <Icon size={17} />
                </span>

                {!collapsed && (
                  <span className="sidebar-link-label">
                    {item.label}
                  </span>
                )}
              </Link>
            );
          })}
        </div>

        {!collapsed && (
          <p className="sidebar-group-label sidebar-intelligence-label">
            Intelligence
          </p>
        )}

        <div className="sidebar-nav-list">
          {intelligenceNavigation.map(
            (item) => {
              const Icon = item.icon;

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  title={
                    collapsed
                      ? item.label
                      : undefined
                  }
                  className={`sidebar-link ${
                    isActive(item.href)
                      ? "active"
                      : ""
                  }`}
                >
                  <span
                    className={`sidebar-link-icon ${item.accent}`}
                  >
                    <Icon size={17} />
                  </span>

                  {!collapsed && (
                    <>
                      <span className="sidebar-link-label">
                        {item.label}
                      </span>

                      {item.badge && (
                        <span className="sidebar-ai-badge">
                          {item.badge}
                        </span>
                      )}
                    </>
                  )}
                </Link>
              );
            }
          )}
        </div>
      </nav>

      <div className="sidebar-bottom">
        <Link
          href="/settings"
          title={
            collapsed
              ? "Settings"
              : undefined
          }
          className={`sidebar-link sidebar-settings-link ${
            isActive("/settings")
              ? "active"
              : ""
          }`}
        >
          <span className="sidebar-link-icon neutral">
            <Settings size={17} />
          </span>

          {!collapsed && (
            <span className="sidebar-link-label">
              Settings
            </span>
          )}
        </Link>

        <div className="sidebar-divider" />

        <div className="sidebar-profile">
          <div className="sidebar-profile-avatar">
            V
          </div>

          {!collapsed && (
            <div className="sidebar-profile-copy">
              <strong>
                LifeOS User
              </strong>

              <span>
                Free plan
              </span>
            </div>
          )}
        </div>

        <button
          type="button"
          className="sidebar-theme-row"
          onClick={toggleTheme}
          title={
            collapsed
              ? "Toggle theme"
              : undefined
          }
        >
          <span className="sidebar-theme-icon">
            {theme === "dark" ? (
              <Moon size={15} />
            ) : (
              <Sun size={15} />
            )}
          </span>

          {!collapsed && (
            <>
              <span>
                {theme === "dark"
                  ? "Dark mode"
                  : "Light mode"}
              </span>

              <span
                className={`theme-switch-track ${
                  theme === "dark"
                    ? "on"
                    : ""
                }`}
              >
                <span className="theme-switch-thumb" />
              </span>
            </>
          )}
        </button>
      </div>
    </aside>
  );
}