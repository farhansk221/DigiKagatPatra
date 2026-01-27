"use client";

import { useRouter } from "next/navigation";
import DashboardLayout from "@/app/dashboard/DashboardLayout";
import { organizations } from "@/data/organizations";

export default function OrgUsersPage() {
  const router = useRouter();

  const allUsers = organizations.flatMap(org =>
    org.users.map(user => ({
      ...user,
      orgName: org.name,
      orgId: org.id,
    })),
  );

  return (
    <DashboardLayout>
      <div className="dashboard-content">
        <div className="dashboard-header">
          <h1 className="dashboard-title">Users</h1>
        </div>
        <p className="welcome-subtitle" style={{ marginBottom: "24px" }}>
          Manage all organization users here.
        </p>
        <button
          className="btn-primary"
          onClick={() => router.push("/org/users/invite")}
        >
          Invite Users
        </button>

        <div style={{ marginTop: "24px" }}>
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
      </div>
    </DashboardLayout>
  );
}

