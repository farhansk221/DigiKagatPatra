import Link from "next/link";

export default function EditDocument() {
  return (
    <div>
      <h3>Edit Document</h3>

      <input defaultValue="Marksheet" />
      <br /><br />
      <textarea rows={5} defaultValue="Document content here..." />
      <br /><br />

      <button>Save (Dummy)</button>
      <br /><br />

      {/* REDIRECT BACK */}
      <Link href="/demo_users/documents/view">
        Back to View
      </Link>
    </div>
  );
}
