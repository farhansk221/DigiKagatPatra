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
    <div className="min-h-screen bg-[#F5F7FA] flex items-center justify-center font-system">
      <div className="bg-white w-full max-w-100 p-8 rounded-lg shadow-lg">
        <h2 className="text-center text-[#0B3C5D] mb-6 text-2xl font-semibold">Create Account</h2>

        <form className="flex flex-col gap-4" onSubmit={handleSignup}>
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
            Sign Up
          </button>
          <button
            className="mt-3 w-full bg-white text-[#0B3C5D] border border-[#0B3C5D] py-2.5 rounded text-sm cursor-pointer hover:bg-[#F0F4F8] transition-colors font-medium"
            onClick={() => router.push("/auth/login")}
          >
            Already registered
          </button>
        </form>
      </div>
    </div>
  );
}
