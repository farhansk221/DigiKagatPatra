import Link from "next/link";

export default function DashboardPage() {
  return (
    <div>
      <h3>Dashboard</h3>
      <p>Welcome, Siddhi</p>

      <Link href="/demo_users/documents">Go to Documents</Link>
    </div>
  );
}
