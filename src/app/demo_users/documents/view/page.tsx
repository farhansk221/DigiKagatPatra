import Link from "next/link";

export default function ViewDocument() {
  return (
    <div>
      <h3>Marksheet</h3>
      <p>This is the document content.</p>

      {/* REDIRECT TO EDIT */}
      <Link href="/dumo_user/documents/view/edit">
        Edit Document
      </Link>
    </div>
  );
}
