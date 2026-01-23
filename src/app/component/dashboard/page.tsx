"use client";

import DashboardLayout from "./DashboardLayout";

export default function DashboardPage() {
  return (
    <DashboardLayout>
      <div className="dashboard-header">
        <h1 className="dashboard-title">Dashboard</h1>
      </div>
      <div className="dashboard-content">
        <p className="welcome-message">Welcome to DigiKagatPatra</p>
        <p className="welcome-subtitle">
          Select an option from the sidebar to continue.
        </p>
      </div>
    </DashboardLayout>
  );
}
