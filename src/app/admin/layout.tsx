import Sidebar from "@/components/Sidebar";
import { adminSidebar } from "@/data/sideBarMenu";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen bg-[#F5F7FA]">
      <Sidebar {...adminSidebar} />
      <main className="flex-1 p-6">{children}</main>
    </div>
  );
}
