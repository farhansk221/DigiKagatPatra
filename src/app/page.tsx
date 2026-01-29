"use client";

import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        padding: "32px",
      }}
    >
      <div className="auth-card" style={{ maxWidth: "420px", width: "100%" }}>
        <h1 className="auth-title" style={{ fontSize: "28px" }}>
          DigiKagadPatra
        </h1>

        <p
          style={{
            textAlign: "center",
            color: "#6B7C8F",
            marginBottom: "24px",
          }}
        >
          Secure digital document authentication & verification
        </p>

        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          <button
            className="btn-primary"
            onClick={() => router.push("/auth/login")}
          >
            Sign In
          </button>

          <button
            className="btn-secondary"
            onClick={() => router.push("/auth/signup")}
          >
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
}
