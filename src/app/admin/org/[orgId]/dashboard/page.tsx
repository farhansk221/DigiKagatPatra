"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import { AuthService } from "@/config/firebase";
import { route_constants } from "@/config/route_constant";
import { useParams } from "next/navigation";
import Link from "next/link";

export default function OrganisationDetails() {
  const { orgId } = useParams(); // 👈 get ID from URL
  const [organisation, setOrganisation] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchOrganisation = async () => {
      try {
        const firebaseToken = await AuthService.getUserAccessToken();

        const response = await axios.get(
          `http://localhost:8000${route_constants.Organisation.org_id}${orgId}/`,
          {
            headers: {
              Authorization: `Bearer ${firebaseToken}`,
            },
          }
        );

        setOrganisation(response.data);
        console.log("Fetched organisation:", response.data);
      } catch (err) {
        console.error(err);
        setError("Failed to fetch organisation");
      } finally {
        setLoading(false);
      }
    };

    if (orgId) {
      fetchOrganisation();
    }
  }, [orgId]);

  if (loading) return <p>Loading organisation...</p>;
  if (error) return <p className="text-red-600">{error}</p>;
  if (!organisation) return <p>No organisation found</p>;

  return (
    <div className="bg-white p-6 rounded-md border border-gray-300 max-w-xl">
      <h2 className="text-xl font-semibold mb-4">Organisation Details</h2>

      <p>
        <strong>ID:</strong> {organisation.id}
      </p>
      <p>
        <strong>Name:</strong> {organisation.name}
      </p>
      <p>
        <strong>Description:</strong> {organisation.description}
      </p>
      <h3 className="text-lg font-semibold mt-6 mb-2">Members</h3>

{organisation.members && organisation.members.length > 0 ? (
  <ul className="space-y-3">
    {organisation.members.map((member: any) => (
      <li
        key={member.id}
        className="border border-gray-300 rounded-md p-3"
      >
        <p>
          <strong>Username:</strong> {member.user?.username}
        </p>

        <p>
          <strong>Email:</strong> {member.user?.email}
        </p>

        <p>
          <strong>Role:</strong> {member.role?.role_name}
        </p>

        <p>
          <strong>Status:</strong> {member.status}
        </p>

        <p>
          <strong>Start Date:</strong> {member.start_date}
        </p>

        {member.end_date && (
          <p>
            <strong>End Date:</strong> {member.end_date}
          </p>
        )}
      </li>
    ))}
  </ul>
) : (
  <p className="text-gray-500">No members found</p>
)}

      

      <Link
        href="/admin/org"
        className="text-[#1F5F8B] hover:underline inline-block mt-4"
      >
        Back to Organisations
      </Link>
    </div>
  );
}
