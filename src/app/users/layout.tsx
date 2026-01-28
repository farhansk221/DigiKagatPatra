import Link from "next/link";

export default function DemoUsersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div style={styles.wrapper}>
      {/* Sidebar */}
      <aside style={styles.sidebar}>
        <h2 style={styles.logo}>Demo User</h2>

        <nav style={styles.nav}>
          <Link href="/users/dashboard" style={styles.link}>
            Dashboard
          </Link>
          <Link href="/users/documents" style={styles.link}>
            Documents
          </Link>
          <Link href="/users/profile" style={styles.link}>
            Profile
          </Link>
          <Link href="/users/settings" style={styles.link}>
            Settings
          </Link>
        </nav>
      </aside>

      {/* Main Content */}
      <main style={styles.content}>{children}</main>
    </div>
  );
}

const styles = {
  wrapper: {
    display: "flex",
    minHeight: "100vh",
    backgroundColor: "#F5F7FA",
  },
  sidebar: {
    width: "220px",
    backgroundColor: "#0B3C5D",
    color: "#FFFFFF",
    padding: "20px",
  },
  logo: {
    marginBottom: "30px",
    fontSize: "20px",
    fontWeight: "bold",
  },
  nav: {
    display: "flex",
    flexDirection: "column" as const,
    gap: "12px",
  },
  link: {
    color: "#FFFFFF",
    textDecoration: "none",
    padding: "8px 10px",
    borderRadius: "4px",
  },
  content: {
    flex: 1,
    padding: "24px",
    color: "#1A1A1A",
  },
};
