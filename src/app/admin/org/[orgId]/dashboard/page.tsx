"use client";

export default function AdminOrgDashboardPage({
  params,
}: {
  params: { orgId: string };
}) {
  return (
    <div className="dashboard-content">
      <div className="dashboard-header">
        <h1 className="dashboard-title">Admin · Org Dashboard</h1>
      </div>
      <p className="welcome-subtitle">
        Managing organization <strong>{params.orgId}</strong>.
      </p>
    </div>
  );
}


