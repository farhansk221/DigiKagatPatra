"use client";

import DashboardLayout from "@/app/dashboard/DashboardLayout";

export default function OrgUsersInvitePage() {
  return (
    <DashboardLayout>
      <div className="dashboard-content">
        <div className="dashboard-header">
          <h1 className="dashboard-title">Invite Users</h1>
        </div>
        <p className="welcome-subtitle">
          Invite new users to your organization.
        </p>
      </div>
    </DashboardLayout>
  );
}
