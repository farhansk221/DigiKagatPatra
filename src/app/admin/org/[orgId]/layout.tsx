"use client";


interface AdminOrgLayoutProps {
  children: React.ReactNode;
  params: { orgId: string };
}

// Wrap all admin org pages with the dashboard sidebar
export default function AdminOrgLayout({ children }: AdminOrgLayoutProps) {
  return <>{children}</>;
}


