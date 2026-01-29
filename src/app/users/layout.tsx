import Sidebar from "@/components/Sidebar";
import { userSidebar } from "@/data/sideBarMenu";

export default function UsersLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen bg-[#F5F7FA]">
      <Sidebar {...userSidebar} />
      <main className="flex-1 p-6">{children}</main>
    </div>
  );
}
