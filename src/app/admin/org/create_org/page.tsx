"use client";

import { useState } from "react";
import axios from "axios";
import { AuthService } from "@/config/firebase";
import { route_constants } from "@/config/route_constant";
import Link from "next/link";

export default function CreateOrganisation() {
  const [organisationName, setOrganisationName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const firebaseToken = await AuthService.getUserAccessToken();

      await axios.post(
        `http://localhost:8000${route_constants.Organisation.create_org}register/`,
        {
          organisation_name: organisationName,
          username: username,
          email: email,
          password: password,
        },
        {
          headers: {
            Authorization: `Bearer ${firebaseToken}`,
            "Content-Type": "application/json",
          },
        }
      );

      setOrganisationName("");
      setUsername("");
      setEmail("");
      setPassword("");

      alert("Organisation created successfully");
    } catch (err) {
      console.error(err);
      setError("Failed to create organisation");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white p-6 rounded-md border border-gray-300 max-w-xl">
      <h2 className="text-xl font-semibold mb-4">Create Organisation</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Organisation Name */}
        <div>
          <label className="block text-sm font-medium mb-1">
            Organisation Name
          </label>
          <input
            type="text"
            value={organisationName}
            onChange={(e) => setOrganisationName(e.target.value)}
            required
            className="w-full border border-gray-300 rounded px-3 py-2"
          />
        </div>

        {/* Username */}
        <div>
          <label className="block text-sm font-medium mb-1">Username</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            className="w-full border border-gray-300 rounded px-3 py-2"
          />
        </div>

        {/* Email */}
        <div>
          <label className="block text-sm font-medium mb-1">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full border border-gray-300 rounded px-3 py-2"
          />
        </div>

        {/* Password */}
        <div>
          <label className="block text-sm font-medium mb-1">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full border border-gray-300 rounded px-3 py-2"
          />
        </div>

        {error && <p className="text-red-600 text-sm">{error}</p>}

        <button
          type="submit"
          disabled={loading}
          className="bg-[#1F5F8B] text-white px-4 py-2 rounded hover:bg-[#174a6b]"
        >
          {loading ? "Creating..." : "Create Organisation"}
        </button>
      </form>

      <Link
        href="/admin/org"
        className="text-[#1F5F8B] hover:underline inline-block mt-4"
      >
        Back to Organisations
      </Link>
    </div>
  );
}
