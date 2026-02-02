import Sidebar from "@/components/Sidebar";
import { orgSidebar } from "@/data/sideBarMenu";

export default function OrgLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen bg-[#F5F7FA]">
      <Sidebar {...orgSidebar} />
      <main className="flex-1 p-6">{children}</main>
    </div>
  );
}
