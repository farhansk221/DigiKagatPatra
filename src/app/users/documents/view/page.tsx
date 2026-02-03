"use client"
import Link from "next/link";
import { AuthService } from "@/config/firebase";
import { useEffect, useState } from "react";
import axios from "axios";
import { route_constants } from "@/config/route_constant";


export default function ViewDocument() {

const [userDocuments, setUserDocuments] = useState<any[]>([]);
  useEffect(() => {
    try {
      const fetchData = async () => {
        const firebaseToken = await AuthService.getUserAccessToken();
        const response = await axios.get(
          `http://localhost:8000${route_constants.Users.AUDIT_ALL_DOCUMENTS}`,
          {
            headers: {
              Authorization: `Bearer ${firebaseToken}`
            },
          },
        );

        setUserDocuments(response.data.results);
        console.log("Successfully fetched user documents:");
        console.log("User Documents:", response.data.results)
      };
      fetchData();
    } catch (error) {
      console.error("Error fetching user documents:");
    }
  }),[];



  return (
    <div className="bg-white p-5 rounded-md border border-gray-300 max-w-xl">
      <h3 className="text-lg font-semibold mb-2">Marksheet</h3>
      <p className="text-gray-600 mb-4">
        This is the document content.
      </p>
 <ul>
  {Array.isArray(userDocuments) &&
    userDocuments.map((doc: any) => (
      <li key={doc.id} className="mb-4 border-b pb-3">
        <p><strong>Audit ID:</strong> {doc.id}</p>
        <p><strong>Action:</strong> {doc.action}</p>
        <p><strong>Timestamp:</strong> {doc.timestamp}</p>

        <p><strong>User ID:</strong> {doc.user?.id}</p>
        <p><strong>Username:</strong> {doc.user?.username}</p>
        <p><strong>Full Name:</strong> {doc.user?.full_name}</p>

        <p><strong>Organisation ID:</strong> {doc.organisation?.id}</p>
        <p><strong>Organisation Name:</strong> {doc.organisation?.name}</p>

        <p><strong>Document ID:</strong> {doc.details?.document_id}</p>
        <p><strong>Document Name:</strong> {doc.details?.document_name}</p>

        <p><strong>IP Address:</strong> {doc.ip_address}</p>
      </li>
    ))}
</ul>



      <Link
        href="/users/documents/view/edit"
        className="text-[#1F5F8B] hover:underline inline-block"
      >
        Edit Document
      </Link>
    </div>
  );
}
