import Link from "next/link";

export default function DocumentsPage() {
  return (
    <div className="bg-white p-5 rounded-md border border-gray-300">
      <h3 className="text-lg font-semibold mb-3">Documents</h3>

      <ul className="list-none p-0 space-y-2">
        <li>
          <Link
            href="/orgn/documents/create"
            className="text-blue-600 hover:underline"
          >
            + Create Document
          </Link>
        </li>
        <li>
          <Link
            href="/orgn/documents/view"
            className="text-blue-600 hover:underline"
          >
            Marksheet
          </Link>
        </li>
        <li>
          <Link
            href="/orgn/documents/view"
            className="text-blue-600 hover:underline"
          >
            Degree Certificate
          </Link>
        </li>
      </ul>
    </div>
  );
}
