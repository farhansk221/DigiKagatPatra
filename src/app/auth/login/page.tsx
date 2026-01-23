"use client";

import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { auth, AuthService } from "@/config/firebase";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    await AuthService.loginWithEmail(email, password);
    router.push("/dashboard");
  };

  const handleGoogleLogin = async () => {
    const provider = new GoogleAuthProvider();
    await signInWithPopup(auth, provider);
    router.push("/dashboard");
  };

  return (
    <div className="page">
      <div className="auth-card">
        <h2 className="auth-title">Login</h2>

        <form className="auth-form" onSubmit={handleLogin}>
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

          <button className="btn-primary">Login</button>
        </form>


        <button className="btn-secondary" onClick={handleGoogleLogin}>
          Continue with Google
        </button>
        <button
          className="btn-secondary"
          style={{ marginTop: "12px" }}
          onClick={() => router.push("/auth/signup")}
        >
          Create new account
        </button>
      </div>
    </div>
  );
}
