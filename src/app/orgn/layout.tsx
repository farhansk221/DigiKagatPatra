import Link from "next/link";

export default function OrgLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div style={styles.wrapper}>
      <aside style={styles.sidebar}>
        <h2 style={styles.logo}>Organization</h2>

        <nav style={styles.nav}>
          <Link href="/orgn/dashboard" style={styles.link}>
            Dashboard
          </Link>
          <Link href="/orgn/documents" style={styles.link}>
            Documents
          </Link>
          <Link href="/orgn/users" style={styles.link}>
            Users
          </Link>
          <Link href="/orgn/profile" style={styles.link}>
            Profile
          </Link>
          <Link href="/orgn/settings" style={styles.link}>
            Settings
          </Link>
        </nav>
       
      </aside>
     

      <main style={styles.content}>{children}</main>
   
      
    </div>
  );
}

/* ✅ THIS WAS MISSING */
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
    padding: "8px",
    borderRadius: "4px",
  },
  content: {
    flex: 1,
    padding: "24px",
    color: "#1A1A1A",
  },
}