"use client";

export default function OrgDocumentViewPage({
  params,
}: {
  params: { orgId: string; docId: string };
}) {
  return (
    <div className="dashboard-content">
      <div className="dashboard-header">
        <h1 className="dashboard-title">View Document</h1>
      </div>
      <p className="welcome-subtitle">
        Viewing document <strong>{params.docId}</strong> for org{" "}
        <strong>{params.orgId}</strong>.
      </p>
    </div>
  );
}


