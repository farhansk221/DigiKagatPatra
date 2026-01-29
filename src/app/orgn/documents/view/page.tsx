import Link from "next/link";

export default function ViewDocumentPage() {
  return (
    <div className="bg-white p-5 rounded-md border border-gray-300">
      <h3 className="text-lg font-semibold">Document View</h3>
      <p className="text-gray-600">
        This document is issued by the organization.
      </p>

      <Link
        href="/orgn/documents/view/edit"
        className="text-blue-600 hover:underline inline-block mt-2"
      >
        Edit Document
      </Link>
    </div>
  );
}
