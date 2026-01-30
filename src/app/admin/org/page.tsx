"use client";

import { organizations } from "@/data/organizations";
import { useRouter } from "next/navigation";

export default function AdminOrgListPage() {
  const router = useRouter();

  return (
    
      <div className="dashboard-content">
        <div className="dashboard-header">
          <h1 className="dashboard-title">Admin · Organizations</h1>
        </div>
        <p className="welcome-subtitle" style={{ marginBottom: "24px" }}>
          Select an organization to manage its users.
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
                    onClick={() => router.push(`/admin/org/${org.id}/users`)}
                  >
                    Manage Users
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    
  );
}


