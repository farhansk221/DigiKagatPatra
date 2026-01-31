"use client";

export default function AdminOrgDashboardPage({
  params,
}: {
  params: { orgId: string };
}) {
  return (
    <div className="text-gray-900">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-[#0B3C5D] mb-2">Admin · Org Dashboard</h1>
      </div>
      <p className="text-base text-gray-600">
        Managing organization <strong>{params.orgId}</strong>.
      </p>
    </div>
  );
}


