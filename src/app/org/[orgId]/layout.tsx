"use client";

import DashboardLayout from "@/app/dashboard/DashboardLayout";

interface OrgLayoutProps {
  children: React.ReactNode;
  params: { orgId: string };
}

// Org layout + guard placeholder
// You can add auth/role checks here later using params.orgId
export default function OrgLayout({ children }: OrgLayoutProps) {
  return <DashboardLayout>{children}</DashboardLayout>;
}


