"use client";

export default function OrgDocumentEditPage({
  params,
}: {
  params: { orgId: string; docId: string };
}) {
  return (
    <div className="dashboard-content">
      <div className="dashboard-header">
        <h1 className="dashboard-title">Edit Document</h1>
      </div>
      <p className="welcome-subtitle">
        Editing document <strong>{params.docId}</strong> for org{" "}
        <strong>{params.orgId}</strong>.
      </p>
    </div>
  );
}


