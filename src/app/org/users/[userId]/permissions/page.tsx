"use client";

import DashboardLayout from "@/app/dashboard/DashboardLayout";

export default function OrgUserPermissionsPage({
  params,
}: {
  params: { userId: string };
}) {
  return (
    <DashboardLayout>
      <div className="dashboard-content">
        <div className="dashboard-header">
          <h1 className="dashboard-title">User Permissions</h1>
        </div>
        <p className="welcome-subtitle">
          Manage permissions for user <strong>{params.userId}</strong>.
        </p>
      </div>
    </DashboardLayout>
  );
}
