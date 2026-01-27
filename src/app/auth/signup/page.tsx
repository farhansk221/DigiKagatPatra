"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { AuthService } from "@/config/firebase";

export default function SignupPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    await AuthService.signupWithEmail(email, password);
    router.push("/admin/dashboard");
  };

  return (
    <div className="page">
      <div className="auth-card">
        <h2 className="auth-title">Create Account</h2>

        <form className="auth-form" onSubmit={handleSignup}>
          <div className="form-group">
            <label>Email</label>
            <input value={email} onChange={e => setEmail(e.target.value)} />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
          </div>

          <button className="btn-primary">Sign Up</button>
          <button  className="btn-secondary"
          style={{ marginTop: "12px" }}
          onClick={() => router.push("/auth/login")}
        >
          Already registered
        </button>
        </form>
      </div>
    </div>
  );
}
