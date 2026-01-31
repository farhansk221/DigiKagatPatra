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
    <div className="bg-white p-5 rounded-md border border-gray-300">
      <div className="flex justify-between items-center mb-5">
        <h3 className="text-lg font-semibold">
          {selectedOrg ? `${selectedOrg.name} · Users` : "Organization Users"}
        </h3>
        <Link href="/orgn/users/invite" className="px-4 py-2 bg-[#003366] text-white rounded text-sm font-medium hover:bg-[#002244] transition-colors inline-block">
          Invite User
        </Link>
      </div>

      {selectedOrg && (
        <p className="mb-5 text-gray-600">
          Managing {users.length} user(s) in {selectedOrg.name}
        </p>
      )}

      {users.length > 0 ? (
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-100 border-b-2 border-gray-300">
                <th className="px-3 py-3 text-left font-semibold text-[#003366]">ID</th>
                <th className="px-3 py-3 text-left font-semibold text-[#003366]">Name</th>
                <th className="px-3 py-3 text-left font-semibold text-[#003366]">Email</th>
                <th className="px-3 py-3 text-left font-semibold text-[#003366]">Role</th>
                <th className="px-3 py-3 text-left font-semibold text-[#003366]">Action</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.id} className="border-b border-gray-300">
                  <td className="px-3 py-3 text-left">{user.id}</td>
                  <td className="px-3 py-3 text-left">{user.name}</td>
                  <td className="px-3 py-3 text-left">{user.email}</td>
                  <td className="px-3 py-3 text-left">
                    <span className="inline-block px-2 py-1 bg-[#e8f0f7] text-[#003366] rounded text-xs font-medium">
                      {user.role}
                    </span>
                  </td>
                  <td className="px-3 py-3 text-left">
                    <button className="px-3 py-1.5 bg-gray-100 border border-gray-300 rounded text-xs cursor-pointer hover:bg-gray-200 transition-colors">
                      Edit
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p className="py-5 text-center text-gray-600">
          {selectedOrg
            ? "No users in this organization yet."
            : "Organization not found."}
        </p>
      )}
    </div>
  );
}

