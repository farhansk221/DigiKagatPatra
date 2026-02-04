"use client";

import Link from "next/link";
import { organizations } from "@/data/organizations";

export default function DashboardPage() {
  return (
    <div className="bg-white p-5 rounded-md border border-gray-300">
      <h3 className="text-lg font-semibold mb-4"> Organizations</h3>
      <p className="mb-5 text-gray-600\">Select an organization to manage its users.</p>
      
      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-100 border-b-2 border-gray-300\">
              <th className="px-3 py-3 text-left font-semibold text-[#003366]">Org ID</th>
              <th className="px-3 py-3 text-left font-semibold text-[#003366]">Name</th>
              <th className="px-3 py-3 text-left font-semibold text-[#003366]">Country</th>
              <th className="px-3 py-3 text-left font-semibold text-[#003366]">Users</th>
              <th className="px-3 py-3 text-left font-semibold text-[#003366]">Action</th>
            </tr>
          </thead>
          <tbody>
            {organizations.map((org) => (
              <tr key={org.id} className="border-b border-gray-300">
                <td className="px-3 py-3 text-left">{org.id}</td>
                <td className="px-3 py-3 text-left">{org.name}</td>
                <td className="px-3 py-3 text-left">{org.country}</td>
                <td className="px-3 py-3 text-left">{org.users.length}</td>
                <td className="px-3 py-3 text-left">
                  <Link 
                    href={`/orgn/${org.id}/users`} 
                    className="px-4 py-2 border border-[#003366] text-[#003366] bg-white rounded text-sm font-medium hover:bg-gray-50 transition-colors inline-block"
                  >
                    Manage Users
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Link href="/orgn/create_orgn" className="text-white border bg-[#1F5F8B] hover:underline inline-block mt-4">
        <button className="px-4 py-2 rounded-lg bg-[#1F5F8B]">Create Organisation</button>
      </Link>
    </div>
  );
}



