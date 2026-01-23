"use client";

import DashboardLayout from "../../DashboardLayout";

export default function CreatePage() {
  return (
    <DashboardLayout>
      <div className="dashboard-header">
        <h1 className="dashboard-title">Create</h1>
      </div>
      <div className="dashboard-content">
        <p className="welcome-subtitle">Create new document here.</p>
      </div>
    </DashboardLayout>
  );
}

