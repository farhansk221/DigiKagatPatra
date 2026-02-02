import Link from "next/link";

export default function DocumentsPage() {
  return (
    <div className="bg-white p-5 rounded-md border border-gray-300 max-w-xl">
      <h3 className="text-lg font-semibold mb-3">Documents</h3>

      <ul className="list-none p-0 space-y-2">
        <li>
          <Link
            href="/users/documents/view"
            className="block py-2 text-[#1F5F8B] hover:underline"
          >
            Marksheet
          </Link>
        </li>
        <li>
          <Link
            href="/users/documents/view"
            className="block py-2 text-[#1F5F8B] hover:underline"
          >
            Degree Certificate
          </Link>
        </li>
      </ul>
    </div>
  );
}
