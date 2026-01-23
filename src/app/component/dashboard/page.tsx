"use client";

import { signOut } from "firebase/auth";
import { useRouter } from "next/navigation";
import { auth } from "@/config/firebase";

export default function DashboardPage() {
  const router = useRouter();

  const logout = async () => {
    await signOut(auth);
    router.push("/login");
  };

  return (
    <div className="page">
      <div className="auth-card">
        <h2 className="auth-title">Dashboard</h2>
        <p style={{ color: "#0B3C5D", marginBottom: "16px" }}>
          You are logged in 🎉
        </p>
        <button className="btn-primary" onClick={logout}>
          Logout
        </button>
      </div>
    </div>
  );
}
