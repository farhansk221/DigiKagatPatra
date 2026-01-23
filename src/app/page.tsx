"use client";


import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter()
    return (
    <div className="page">
      <div className="auth-card">
        <h1 className="auth-title" style={{ fontSize: "28px" }}>
          DigiKagadPatra
        </h1>

        <p style={{ textAlign: "center", color: "#6B7C8F", marginBottom: "24px" }}>
          Secure digital document authentication & verification
        </p>

        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          <button
            className="btn-primary"
            onClick={() => router.push("/login")}
          >
            Sign In
          </button>

          <button
            className="btn-secondary"
            onClick={() => router.push("/signup")}
          >
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
}
