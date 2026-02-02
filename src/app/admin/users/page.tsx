"use client";

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
    
      <div className="text-gray-900">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-[#0B3C5D] mb-2">Admin · All Users</h1>
        </div>
        <p className="text-base text-gray-600 mb-6">
          List of all users across all organizations.
        </p>

        <div className="overflow-x-auto rounded-lg border border-gray-300 shadow-sm">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-100 border-b border-gray-300">
                <th className="text-left text-gray-700 px-4 py-3 font-semibold text-sm">Org</th>
                <th className="text-left text-gray-700 px-4 py-3 font-semibold text-sm">User</th>
                <th className="text-left text-gray-700 px-4 py-3 font-semibold text-sm">Email</th>
                <th className="text-left text-gray-700 px-4 py-3 font-semibold text-sm">Role</th>
              </tr>
            </thead>
            <tbody>
              {allUsers.map(user => (
                <tr key={`${user.orgId}-${user.id}`} className="border-b border-gray-200 hover:bg-gray-50 transition-colors">
                  <td className="text-gray-700 px-4 py-3 text-sm">{user.orgName}</td>
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


