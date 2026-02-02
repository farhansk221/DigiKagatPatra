"use client";

import Table from "@/components/ui/Table";
import { organizations } from "@/data/organizations";
import { useRouter } from "next/navigation";

export default function AdminOrgListPage() {
  const router = useRouter();

  return (
    <div>
      <div className="dashboard-content">
        <div className="dashboard-header">
          <h1 className="dashboard-title">Admin · Organizations</h1>
        </div>
        <p className="welcome-subtitle" style={{ marginBottom: "24px" }}>
          Select an organization to manage its users.
        </p>

        <Table
          tableHeaders={["Org ID", "Name", "Country", "Users", ""]}
          data={organizations}
        />
      </div>
    </div>
  );
}
