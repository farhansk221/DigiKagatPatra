"use client";

import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { auth, AuthService } from "@/config/firebase";
import Link from "next/link";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    await AuthService.loginWithEmail(email, password);
    router.push("/admin/dashboard");
  };

  const handleGoogleLogin = async () => {
    const provider = new GoogleAuthProvider();
    await signInWithPopup(auth, provider);
    router.push("/admin/dashboard");
  };

  return (
    <div className="min-h-screen bg-[#F5F7FA] flex items-center justify-center font-system">
      <div className="bg-white w-full max-w-[420px] p-8 rounded-lg shadow-lg">
        <h2 className="text-center text-[#0B3C5D] mb-6 text-2xl font-semibold">Login</h2>

        <form className="flex flex-col gap-4" onSubmit={handleLogin}>
          <div className="flex flex-col gap-1.5">
            <label className="text-sm text-[#0B3C5D] font-medium">Email</label>
            <input
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              className="px-3 py-2.5 border border-[#DCE3EC] rounded text-sm focus:outline-none focus:border-[#0B3C5D] transition-colors"
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-sm text-[#0B3C5D] font-medium">Password</label>
            <input
              type="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              className="px-3 py-2.5 border border-[#DCE3EC] rounded text-sm focus:outline-none focus:border-[#0B3C5D] transition-colors"
            />
          </div>

          <button className="mt-2 bg-[#0B3C5D] text-white border-none py-3 rounded text-base font-medium cursor-pointer hover:bg-[#09324D] transition-colors">
            Login
          </button>
        </form>

        <button
          className="mt-4 w-full bg-white text-[#0B3C5D] border border-[#0B3C5D] py-2.5 rounded text-sm cursor-pointer hover:bg-[#F0F4F8] transition-colors font-medium"
          onClick={handleGoogleLogin}
        >
          Continue with Google
        </button>
        <button
          className="mt-3 w-full bg-white text-[#0B3C5D] border border-[#0B3C5D] py-2.5 rounded text-sm cursor-pointer hover:bg-[#F0F4F8] transition-colors font-medium"
          onClick={() => router.push("/auth/signup")}
        >
          Create new account
        </button>
        <Link href="/auth/forget">
          <h2 className="mt-4 text-center text-[#0B3C5D] font-semibold hover:underline cursor-pointer">
            Forget Password
          </h2>
        </Link>
      </div>
    </div>
  );
}
