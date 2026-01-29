// app/admin/layout.tsx

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div style={{ flex: 1 }}>{children}</div>

      <footer
        className="section-footer"
        style={{
          marginLeft: "250px", // align with sidebar
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "8px",
          }}
        >
          {/* Left side */}
          <div>
            <strong>DigiKagatPatra</strong> Admin Panel  
            <span style={{ marginLeft: 8, opacity: 0.7 }}>
              v1.0.0
            </span>
          </div>

          {/* Center */}
          <div style={{ opacity: 0.7 }}>
            Logged in as <strong>Administrator</strong>
          </div>

          {/* Right side */}
          <div style={{ display: "flex", gap: "16px" }}>
            <a href="#" style={{ fontSize: "13px" }}>Help</a>
            <a href="#" style={{ fontSize: "13px" }}>Docs</a>
            <a href="#" style={{ fontSize: "13px" }}>Privacy</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
