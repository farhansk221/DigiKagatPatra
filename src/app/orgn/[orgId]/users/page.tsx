"use client";

import { use } from "react";
import Link from "next/link";
import { organizations } from "@/data/organizations";

interface UsersPageProps {
  params: Promise<{
    orgId: string;
  }>;
}

export default function UsersPage({ params }: UsersPageProps) {
  const { orgId } = use(params);
  const selectedOrg = organizations.find((org) => org.id === orgId);
  const users = selectedOrg ? selectedOrg.users : [];

  return (
    <div style={card}>
      <div style={headerContainer}>
        <h3>
          {selectedOrg ? `${selectedOrg.name} · Users` : "Organization Users"}
        </h3>
        <Link href="/orgn/users/invite" style={inviteButtonStyle}>
          Invite User
        </Link>
      </div>

      {selectedOrg && (
        <p style={subText}>
          Managing {users.length} user(s) in {selectedOrg.name}
        </p>
      )}

      {users.length > 0 ? (
        <table style={tableStyle}>
          <thead>
            <tr style={headerRowStyle}>
              <th style={headerCellStyle}>ID</th>
              <th style={headerCellStyle}>Name</th>
              <th style={headerCellStyle}>Email</th>
              <th style={headerCellStyle}>Role</th>
              <th style={headerCellStyle}>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id} style={bodyRowStyle}>
                <td style={cellStyle}>{user.id}</td>
                <td style={cellStyle}>{user.name}</td>
                <td style={cellStyle}>{user.email}</td>
                <td style={cellStyle}>
                  <span style={roleStyle}>{user.role}</span>
                </td>
                <td style={cellStyle}>
                  <button style={actionButtonStyle}>Edit</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p style={emptyMessage}>
          {selectedOrg
            ? "No users in this organization yet."
            : "Organization not found."}
        </p>
      )}
    </div>
  );
}

const card = {
  backgroundColor: "#fff",
  padding: "20px",
  borderRadius: "6px",
  border: "1px solid #E0E0E0",
};

const headerContainer = {
  display: "flex" as const,
  justifyContent: "space-between",
  alignItems: "center",
  marginBottom: "20px",
};

const inviteButtonStyle = {
  padding: "8px 16px",
  backgroundColor: "#003366",
  color: "#fff",
  borderRadius: "4px",
  textDecoration: "none",
  fontSize: "14px",
  fontWeight: "500",
};

const subText = {
  marginBottom: "20px",
  color: "#666",
};

const tableStyle = {
  width: "100%",
  borderCollapse: "collapse" as const,
};

const headerRowStyle = {
  backgroundColor: "#f5f5f5",
  borderBottom: "2px solid #ddd",
};

const headerCellStyle = {
  padding: "12px",
  textAlign: "left" as const,
  fontWeight: "600",
  color: "#003366",
};

const bodyRowStyle = {
  borderBottom: "1px solid #E0E0E0",
};

const cellStyle = {
  padding: "12px",
  textAlign: "left" as const,
};

const roleStyle = {
  display: "inline-block",
  padding: "4px 8px",
  backgroundColor: "#e8f0f7",
  color: "#003366",
  borderRadius: "4px",
  fontSize: "12px",
  fontWeight: "500",
};

const actionButtonStyle = {
  padding: "6px 12px",
  backgroundColor: "#f5f5f5",
  border: "1px solid #ddd",
  borderRadius: "4px",
  cursor: "pointer",
  fontSize: "12px",
};

const emptyMessage = {
  padding: "20px",
  textAlign: "center" as const,
  color: "#999",
};
