"use client";
import { useState } from "react";
import axios from "axios";
import { AuthService } from "@/config/firebase";
import { route_constants } from "@/config/route_constant";
export default function create_orgn() {

    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError("");

        try {
            const firebaseToken = await AuthService.getUserAccessToken();

            await axios.post(
                `http://localhost:8000${route_constants.Organisation.create_org}`,
                {
                    name: name,
                    description: description
                },
                {
                    headers: {
                        Authorization: `Bearer ${firebaseToken}`,
                        "Content-Type": "application/json",
                    },
                }
            );
            setName("");
            setDescription("");
            alert("Organisation created successfully");
        } catch (err) {
            setError("Something went wrong. Please try again.");
        } finally {
            setLoading(false);
            
        }
    };


    return (
        <div className="bg-white p-5 rounded-md border border-gray-300">
            <h3 className="text-lg font-semibold mb-4">Create Organisation</h3>
            <p className="mb-5 text-gray-600">Fill in the details to create a new organisation.</p>
            <form className="space-y-4" onSubmit={handleSubmit}>

                <div>
                    <label className="block text-sm font-medium mb-1">
                        Organisation Name
                    </label>
                    <input
                        type="text"
                        placeholder="Enter organisation name"
                        className="w-full border border-gray-300 rounded px-3 py-2"
                    />
                </div>


                <div>
                    <label className="block text-sm font-medium mb-1">
                        Description
                    </label>
                    <textarea
                        rows={4}
                        placeholder="Enter description"
                        className="w-full border border-gray-300 rounded px-3 py-2"
                    />
                </div>

                <button
                    type="submit"
                    className="bg-[#1F5F8B] text-white px-4 py-2 rounded hover:bg-[#174a6b]"
                >
                    {loading ? "Creating..." : "Create Organisation"}
                </button>
            </form>

        </div>
    )
}