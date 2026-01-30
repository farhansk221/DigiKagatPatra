"use client";

import DashboardLayout from "@/app/dashboard/DashboardLayout";
import { organizations } from "@/data/organizations";

export default function AdminUsersPage() {
  const allUsers = organizations.flatMap(org =>
    org.users.map(user => ({
      ...user,
      orgName: org.name,
      orgId: org.id,
    })),
  );

  return (
    
      <div className="dashboard-content">
        <div className="dashboard-header">
          <h1 className="dashboard-title">Admin · All Users</h1>
        </div>
        <p className="welcome-subtitle" style={{ marginBottom: "24px" }}>
          List of all users across all organizations.
        </p>

        <table>
          <thead>
            <tr>
              <th>Org</th>
              <th>User</th>
              <th>Email</th>
              <th>Role</th>
            </tr>
          </thead>
          <tbody>
            {allUsers.map(user => (
              <tr key={`${user.orgId}-${user.id}`}>
                <td>{user.orgName}</td>
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


