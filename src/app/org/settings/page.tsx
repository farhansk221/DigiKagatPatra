"use client";

import DashboardLayout from "@/app/dashboard/DashboardLayout";

export default function OrgSettingsPage() {
  return (
    <DashboardLayout>
      <div className="dashboard-content">
        <div className="dashboard-header">
          <h1 className="dashboard-title">Settings</h1>
        </div>
        <p className="welcome-subtitle">Global organization settings.</p>
      </div>
    </DashboardLayout>
  );
}
