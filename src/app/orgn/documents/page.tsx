import Link from "next/link";

export default function DocumentsPage() {
  return (
    <div style={card}>
      <h3>Documents</h3>

      <ul style={list}>
        <li><Link href="/orgn/documents/create">+ Create Document</Link></li>
        <li><Link href="/orgn/documents/view">Marksheet</Link></li>
        <li><Link href="/orgn/documents/view">Degree Certificate</Link></li>
      </ul>
    </div>
  );
}

const card = {
  backgroundColor: "#fff",
  padding: "20px",
  borderRadius: "6px",
  border: "1px solid #E0E0E0",
};

const list = { listStyle: "none", padding: 0 };
