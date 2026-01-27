import Link from "next/link";

export default function DemoUserLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <h2>Dumo User Module</h2>

      <nav style={{ marginBottom: "10px" }}>
        <Link href="/demo_users/dashboard">Dashboard</Link> |{" "}
        <Link href="/demo_users/documents">Documents</Link> |{" "}
        <Link href="/demo_users/profile">Profile</Link> |{" "}
        <Link href="/demo_users/settings">Settings</Link>
      </nav>

      <hr />

      {children}
    </div>
  );
}
