"use client";

export default function OrgDocumentsPage({
  params,
}: {
  params: { orgId: string };
}) {
  return (
    <div className="dashboard-content">
      <div className="dashboard-header">
        <h1 className="dashboard-title">Documents</h1>
      </div>
      <p className="welcome-subtitle">
        List documents for org <strong>{params.orgId}</strong> here.
      </p>
    </div>
  );
}


