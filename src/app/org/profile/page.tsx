"use client";

import DashboardLayout from "@/app/dashboard/DashboardLayout";

export default function OrgProfilePage() {
  return (
    <DashboardLayout>
      <div className="dashboard-content">
        <div className="dashboard-header">
          <h1 className="dashboard-title">Org Profile</h1>
        </div>
        <p className="welcome-subtitle">Organization profile settings.</p>
      </div>
    </DashboardLayout>
  );
}
