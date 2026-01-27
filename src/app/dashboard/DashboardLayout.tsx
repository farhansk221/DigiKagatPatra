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
    { label: "Issuer", path: "/dashboard/issuer" },
    { label: "Viewer", path: "/dashboard/viewer" },
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

        
      </aside>

      {/* Main Content */}
      <main className="dashboard-main">{children}</main>
    </div>
  );
}

