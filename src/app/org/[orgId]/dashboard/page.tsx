"use client";

import { useRouter } from "next/navigation";

export default function OrgDashboardPage({
  params,
}: {
  params: { orgId: string };
}) {
  const router = useRouter();

  return (
    <div className="dashboard-content">
      <div className="dashboard-header">
        <h1 className="dashboard-title">Org Dashboard</h1>
      </div>
      <p className="welcome-subtitle" style={{ marginBottom: "24px" }}>
        Organization ID: <strong>{params.orgId}</strong>
      </p>

      <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
        <button
          className="btn-primary"
          onClick={() => router.push("/org/profile")}
        >
          Profile
        </button>
        <button
          className="btn-secondary"
          onClick={() => router.push("/org/settings")}
        >
          Settings
        </button>
        <button
          className="btn-secondary"
          onClick={() => router.push("/org/users")}
        >
          Users
        </button>
      </div>
    </div>
  );
}

