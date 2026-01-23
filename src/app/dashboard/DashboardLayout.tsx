"use client";

import { useRouter, usePathname } from "next/navigation";
import { signOut } from "firebase/auth";
import { auth } from "@/config/firebase";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  const router = useRouter();
  const pathname = usePathname();

  const handleLogout = async () => {
    await signOut(auth);
    router.push("/auth/login");
  };

  const navItems = [
    { label: "Dashboard", path: "/dashboard" },
    { label: "Issuer", path: "/component/issuer" },
    { label: "Stamping Authority", path: "/component/stamping-authority" },
    { label: "Viewer", path: "/component/viewer" },
  ];

  return (
    <div className="dashboard-container">
      {/* Sidebar */}
      <aside className="dashboard-sidebar">
        <div className="sidebar-header">
          <h1 className="sidebar-title">DigiKagatPatra</h1>
        </div>

        <nav className="sidebar-nav">
          {navItems.map((item) => (
            <a
              key={item.path}
              className={`nav-link ${pathname === item.path ? "active" : ""}`}
              onClick={() => router.push(item.path)}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="sidebar-footer">
          <div className="footer-logo">N</div>
          <span className="footer-text">of India</span>
        </div>
      </aside>

      {/* Main Content */}
      <main className="dashboard-main">{children}</main>
    </div>
  );
}

