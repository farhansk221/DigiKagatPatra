import Link from "next/link";

export default function ViewDocument() {
  return (
    <div className="bg-white p-5 rounded-md border border-gray-300 max-w-xl">
      <h3 className="text-lg font-semibold mb-2">Marksheet</h3>
      <p className="text-gray-600 mb-4">
        This is the document content.
      </p>

      <Link
        href="/users/documents/view/edit"
        className="text-blue-600 hover:underline"
      >
        Edit Document
      </Link>
    </div>
  );
}
