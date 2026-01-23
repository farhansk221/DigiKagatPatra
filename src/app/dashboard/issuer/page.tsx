"use client";

import { useRouter } from "next/navigation";
import DashboardLayout from "../DashboardLayout";

export default function IssuerPage() {
  const router = useRouter();

  return (
    <DashboardLayout>
      <div className="dashboard-header">
        <h1 className="dashboard-title">Issuer</h1>
      </div>
      <div className="dashboard-content" style={{ marginTop: "32px" }}>
        <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
          <button
            className="btn-primary"
            onClick={() => router.push("/dashboard/issuer/create")}
            style={{ padding: "12px 24px", fontSize: "16px" }}
          >
            Create
          </button>
          <button
            className="btn-secondary"
            onClick={() => router.push("/dashboard/issuer/documents")}
            style={{ padding: "12px 24px", fontSize: "16px" }}
          >
            Documents
          </button>
        </div>
      </div>
    </DashboardLayout>
  );
}

