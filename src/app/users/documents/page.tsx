import Link from "next/link";

export default function DocumentsPage() {
  return (
    <div style={card}>
      <h3>Documents</h3>

      <ul style={list}>
        <li>
          <Link href="/users/documents/view" style={docLink}>
            Marksheet
          </Link>
        </li>
        <li>
          <Link href="/users/documents/view" style={docLink}>
            Degree Certificate
          </Link>
        </li>
      </ul>
    </div>
  );
}

const card = {
  backgroundColor: "#FFFFFF",
  padding: "20px",
  borderRadius: "6px",
  border: "1px solid #E0E0E0",
};

const list = {
  listStyle: "none",
  padding: 0,
};

const docLink = {
  color: "#1F5F8B",
  textDecoration: "none",
  display: "block",
  padding: "8px 0",
};
