"use client";

import {
  Bell,
  CalendarDays,
  Plus,
} from "lucide-react";

export default function Topbar() {
  const today = new Date();

  const formattedDate =
    today.toLocaleDateString("en-IN", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });

  return (
    <header className="lifeos-topbar">
      <div className="topbar-greeting">
        <span className="topbar-greeting-icon">
          👋
        </span>

        <div>
          <h2>Good evening!</h2>

          <p>
            Here&apos;s what&apos;s happening
            across your LifeOS today.
          </p>
        </div>
      </div>

      <div className="topbar-actions">
        <div className="topbar-date">
          <CalendarDays size={15} />

          <span>{formattedDate}</span>
        </div>

        <button
          type="button"
          className="topbar-icon-button"
          aria-label="Notifications"
        >
          <Bell size={17} />

          <span className="topbar-notification-dot" />
        </button>

        <button
          type="button"
          className="topbar-primary-button"
        >
          <Plus size={16} />

          <span>New task</span>
        </button>
      </div>
    </header>
  );
}