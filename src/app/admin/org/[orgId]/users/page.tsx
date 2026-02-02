"use client";

import { useParams } from "next/navigation";
import { organizations } from "@/data/organizations";

export default function AdminOrgUsersPage() {
  const params = useParams<{ orgId: string }>();
  const normalizedOrgId = params.orgId.trim();
  const org = organizations.find(o => o.id === normalizedOrgId);

  if (!org) {
    return (
      <div className="text-gray-900">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-[#0B3C5D] mb-2">Organization Users</h1>
        </div>
        <p className="text-base text-gray-600">Organization not found.</p>
      </div>
    );
  }

  return (
    <div className="text-gray-900">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-[#0B3C5D] mb-2">
          Users · <span>{org.name}</span>
        </h1>
      </div>
      <p className="text-base text-gray-600 mb-6">
        Showing users for org <strong>{org.id}</strong>.
      </p>

      <div className="overflow-x-auto rounded-lg border border-gray-300 shadow-sm">
        <table className="w-full">
          <thead>
            <tr className="bg-gray-100 border-b border-gray-300">
              <th className="text-left text-gray-700 px-4 py-3 font-semibold text-sm">User</th>
              <th className="text-left text-gray-700 px-4 py-3 font-semibold text-sm">Email</th>
              <th className="text-left text-gray-700 px-4 py-3 font-semibold text-sm">Role</th>
            </tr>
          </thead>
          <tbody>
            {org.users.map(user => (
              <tr key={user.id} className="border-b border-gray-200 hover:bg-gray-50 transition-colors">
                <td className="text-gray-700 px-4 py-3 text-sm">{user.name}</td>
                <td className="text-gray-700 px-4 py-3 text-sm">{user.email}</td>
                <td className="text-gray-700 px-4 py-3 text-sm">{user.role}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

