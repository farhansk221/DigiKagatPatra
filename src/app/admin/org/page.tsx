"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { AuthService } from "@/config/firebase";
import { route_constants } from "@/config/route_constant";

interface Creator {
  id: number;
  username: string;
  full_name: string;
}

interface Organisation {
  id: number;
  name: string;
  description: string;
  created_at: string;
  creator: Creator;
  member_count: number;
  roles_assigned: string[];
}

export default function AdminOrgListPage() {
  const router = useRouter();
  const [organizations, setOrganizations] = useState<Organisation[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    const fetchOrganizations = async () => {
      try {
        const token = await AuthService.getUserAccessToken();
        console.log(token)
        const res = await axios.get(
          `http://localhost:8000${route_constants.Organisation.org}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "application/json",
            },
          }
        );

        setOrganizations(res.data);
        console.log("Fetched organizations:", res.data);
      } catch (err) {
        setError("Failed to load organisations");
      } finally {
        setLoading(false);
      }
    };

    fetchOrganizations();
  }, []);

  if (loading) {
    return <p className="text-gray-600">Loading organisations...</p>;
  }

  if (error) {
    return <p className="text-red-600">{error}</p>;
  }

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
              <th className="px-4 py-3 text-left text-sm font-semibold">
                Org ID
              </th>
              <th className="px-4 py-3 text-left text-sm font-semibold">
                Name
              </th>
              <th className="px-4 py-3 text-left text-sm font-semibold">
                Description
              </th>
              <th className="px-4 py-3"></th>
            </tr>
          </thead>

          <tbody>
            {Array.isArray(organizations) &&
            organizations.map((org) => (
              <tr
                key={org.id}
                className="border-b border-gray-200 hover:bg-gray-50"
              >
                <td className="px-4 py-3 text-sm">{org.id}</td>
                <td className="px-4 py-3 text-sm">{org.name}</td>
                <td className="px-4 py-3 text-sm">{org.description}</td>
                
                <td className="px-4 py-3 text-sm">
                  <button
                    className="border border-[#0B3C5D] text-[#0B3C5D] px-4 py-2 rounded-md text-sm hover:bg-gray-50"
                    onClick={() =>
                      router.push(`/admin/org/${org.id}/users`)
                    }
                  >
                    Manage Users
                  </button>
                </td>
              </tr>
            ))}
            
          </tbody>
        </table>
      </div>

      <Link
        href="/admin/org/create_org"
        className="inline-block mt-4"
      >
        <button className="bg-[#1F5F8B] text-white px-4 py-2 rounded-lg">
          Create Organisation
        </button>
      </Link>
    </div>
  );
}
