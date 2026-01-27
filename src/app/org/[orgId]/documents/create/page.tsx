"use client";

export default function OrgDocumentsCreatePage({
  params,
}: {
  params: { orgId: string };
}) {
  return (
    <div className="dashboard-content">
      <div className="dashboard-header">
        <h1 className="dashboard-title">Create Document</h1>
      </div>
      <p className="welcome-subtitle">
        Create a new document for org <strong>{params.orgId}</strong>.
      </p>
    </div>
  );
}


