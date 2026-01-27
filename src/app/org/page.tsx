"use client";

import DashboardLayout from "@/app/dashboard/DashboardLayout";
import { organizations } from "@/data/organizations";
import { useRouter } from "next/navigation";

export default function OrgListPage() {
  const router = useRouter();

  return (
    <DashboardLayout>
      <div className="dashboard-content">
        <div className="dashboard-header">
          <h1 className="dashboard-title">Organizations</h1>
        </div>

        <p className="welcome-subtitle" style={{ marginBottom: "24px" }}>
          Demo organizations. Click one to open its org dashboard.
        </p>

        <table>
          <thead>
            <tr>
              <th>Org ID</th>
              <th>Name</th>
              <th>Country</th>
              <th>Users</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {organizations.map(org => (
              <tr key={org.id}>
                <td>{org.id}</td>
                <td>{org.name}</td>
                <td>{org.country}</td>
                <td>{org.users.length}</td>
                <td>
                  <button
                    className="btn-secondary"
                    onClick={() => router.push(`/org/${org.id}/dashboard`)}
                  >
                    Open
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </DashboardLayout>
  );
}


