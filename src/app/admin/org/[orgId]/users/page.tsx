"use client";

import { useParams } from "next/navigation";
import { organizations } from "@/data/organizations";

export default function AdminOrgUsersPage() {
  const params = useParams<{ orgId: string }>();
  const normalizedOrgId = params.orgId.trim();
  const org = organizations.find(o => o.id === normalizedOrgId);

  if (!org) {
    return (
      <div className="dashboard-content">
        <div className="dashboard-header">
          <h1 className="dashboard-title">Organization Users</h1>
        </div>
        <p className="welcome-subtitle">Organization not found.</p>
      </div>
    );
  }

  return (
    <div className="dashboard-content">
      <div className="dashboard-header">
        <h1 className="dashboard-title">
          Users · <span>{org.name}</span>
        </h1>
      </div>
      <p className="welcome-subtitle" style={{ marginBottom: "24px" }}>
        Showing users for org <strong>{org.id}</strong>.
      </p>

      <table>
        <thead>
          <tr>
            <th>User</th>
            <th>Email</th>
            <th>Role</th>
          </tr>
        </thead>
        <tbody>
          {org.users.map(user => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.role}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

