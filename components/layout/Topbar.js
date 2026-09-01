import {
  Bell,
  Search,
  Sparkles,
} from "lucide-react";

export default function Topbar() {
  return (
    <header className="topbar">
      <div className="topbar-left">
        <div className="topbar-workspace-icon">
          <Sparkles size={16} />
        </div>

        <div>
          <strong>My Workspace</strong>
          <span>LifeOS</span>
        </div>
      </div>

      <div className="topbar-right">
        <button
          type="button"
          className="topbar-search"
        >
          <Search size={16} />
          <span>Search</span>

          <kbd>⌘ K</kbd>
        </button>

        <button
          type="button"
          className="notification-button"
          aria-label="Notifications"
        >
          <Bell size={18} />

          <span className="notification-dot"></span>
        </button>

        <div className="topbar-plan">
          Free
        </div>
      </div>
    </header>
  );
}