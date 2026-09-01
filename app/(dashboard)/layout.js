import Sidebar from "../../components/layout/Sidebar";
import Topbar from "../../components/layout/Topbar";

export default function DashboardLayout({
  children,
}) {
  return (
    <>
      <Sidebar />

      <div className="dashboard-shell">
        <Topbar />

        <main className="dashboard-content">
          {children}
        </main>
      </div>
    </>
  );
}