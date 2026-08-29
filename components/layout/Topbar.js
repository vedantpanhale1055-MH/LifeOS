import { Bell } from "lucide-react";

import "./Topbar.css";

export default function Topbar() {
  return (
    <header className="topbar">
      <h2 className="topbar-title">
        Good morning, Vedant! 👋
      </h2>

      <div className="topbar-right">
        <span className="topbar-date">
          LifeOS
        </span>

        <button
          className="notification-button"
          aria-label="Notifications"
        >
          <Bell size={19} />
        </button>
      </div>
    </header>
  );
}