"use client";

import Link from "next/link";
import { organizations } from "@/data/organizations";

export default function DashboardPage() {
  return (
    <div style={card}>
      <h3>Admin · Organizations</h3>
      <p style={{ marginBottom: "20px", color: "#666" }}>Select an organization to manage its users.</p>
      
      <table style={tableStyle}>
        <thead>
          <tr style={headerRowStyle}>
            <th style={headerCellStyle}>Org ID</th>
            <th style={headerCellStyle}>Name</th>
            <th style={headerCellStyle}>Country</th>
            <th style={headerCellStyle}>Users</th>
            <th style={headerCellStyle}>Action</th>
          </tr>
        </thead>
        <tbody>
          {organizations.map((org) => (
            <tr key={org.id} style={bodyRowStyle}>
              <td style={cellStyle}>{org.id}</td>
              <td style={cellStyle}>{org.name}</td>
              <td style={cellStyle}>{org.country}</td>
              <td style={cellStyle}>{org.users.length}</td>
              <td style={cellStyle}>
                <Link href={`/orgn/${org.id}/users`} style={manageButtonStyle}>
                  Manage Users
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}


const card = {
  backgroundColor: "#fff",
  padding: "20px",
  borderRadius: "6px",
  border: "1px solid #E0E0E0",
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

const manageButtonStyle = {
  padding: "8px 16px",
  border: "1px solid #003366",
  color: "#003366",
  backgroundColor: "#fff",
  borderRadius: "4px",
  cursor: "pointer",
  fontSize: "14px",
  fontWeight: "500",
  textDecoration: "none",
  display: "inline-block",
};
  
