"use client";

import { usePathname, useRouter } from "next/navigation";

type NavItem = {
  label: string;
  path: string;
};

type SidebarProps = {
  title: string;
  navItems: NavItem[];
};

export default function Sidebar({ title, navItems }: SidebarProps) {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <aside className="w-[220px] bg-[#0B3C5D] p-5 text-white">
      <h2 className="mb-8 text-xl font-bold">
        {title}
      </h2>

      <nav className="flex flex-col gap-2">
        {navItems.map((item) => {
          const isActive = pathname.startsWith(item.path);

          return (
            <button
              key={item.path}
              onClick={() => router.push(item.path)}
              className={`text-left block rounded-md px-3 py-2 transition
                ${
                  isActive
                    ? "bg-white/20 text-white"
                    : "text-white hover:bg-white/15"
                }
              `}
            >
              {item.label}
            </button>
          );
        })}
      </nav>
    </aside>
  );
}
