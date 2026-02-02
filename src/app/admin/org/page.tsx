"use client";

import Table from "@/components/ui/Table";
import { organizations } from "@/data/organizations";
import { useRouter } from "next/navigation";

export default function AdminOrgListPage() {
  const router = useRouter();

  return (
    <div className="text-gray-900">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-[#0B3C5D] mb-2">
          Admin · Organizations
        </h1>
      </div>
      <p className="text-base text-gray-600 mb-6">
        Select an organization to manage its users.
      </p>

      <div className="overflow-x-auto rounded-lg border border-gray-300 shadow-sm">
        <table className="w-full">
          <thead>
            <tr className="bg-gray-100 border-b border-gray-300">
              <th className="text-left text-gray-700 px-4 py-3 font-semibold text-sm">
                Org ID
              </th>
              <th className="text-left text-gray-700 px-4 py-3 font-semibold text-sm">
                Name
              </th>
              <th className="text-left text-gray-700 px-4 py-3 font-semibold text-sm">
                Country
              </th>
              <th className="text-left text-gray-700 px-4 py-3 font-semibold text-sm">
                Users
              </th>
              <th className="text-left text-gray-700 px-4 py-3 font-semibold text-sm"></th>
            </tr>
          </thead>
          <tbody>
            {organizations.map((org) => (
              <tr
                key={org.id}
                className="border-b border-gray-200 hover:bg-gray-50 transition-colors"
              >
                <td className="text-gray-700 px-4 py-3 text-sm">{org.id}</td>
                <td className="text-gray-700 px-4 py-3 text-sm">{org.name}</td>
                <td className="text-gray-700 px-4 py-3 text-sm">
                  {org.country}
                </td>
                <td className="text-gray-700 px-4 py-3 text-sm">
                  {org.users.length}
                </td>
                <td className="text-gray-700 px-4 py-3 text-sm">
                  <button
                    className="bg-white text-[#0B3C5D] border border-[#0B3C5D] px-4 py-2 rounded-md text-sm font-medium hover:bg-gray-50 transition-colors"
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
    </div>
  );
}
