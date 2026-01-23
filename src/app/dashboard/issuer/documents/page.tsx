"use client";

import DashboardLayout from "../../DashboardLayout";

export default function DocumentsPage() {
  return (
    <DashboardLayout>
      <div className="dashboard-header">
        <h1 className="dashboard-title">Documents</h1>
      </div>
      <div className="dashboard-content">
        <p className="welcome-subtitle">View all documents here.</p>
      </div>
    </DashboardLayout>
  );
}

