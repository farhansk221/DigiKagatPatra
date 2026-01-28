import Link from "next/link";

export default function ViewDocumentPage() {
  return (
    <div style={card}>
      <h3>Document View</h3>
      <p>This document is issued by the organization.</p>

      <Link href="/orgn/documents/view/edit">Edit Document</Link>
    </div>
  );
}

const card = {
  backgroundColor: "#fff",
  padding: "20px",
  borderRadius: "6px",
  border: "1px solid #E0E0E0",
};
