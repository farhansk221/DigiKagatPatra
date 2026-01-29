import Link from "next/link";

export default function EditDocument() {
  return (
    <div className="bg-white p-5 rounded-md border border-gray-300 max-w-xl">
      <h3 className="text-lg font-semibold mb-4">Edit Document</h3>

      <input
        defaultValue="Marksheet"
        className="w-full border border-gray-300 rounded-md p-2 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      <textarea
        rows={5}
        defaultValue="Document content here..."
        className="w-full border border-gray-300 rounded-md p-2 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 mb-4">
        Save (Dummy)
      </button>

      <div>
        <Link
          href="/users/documents/view"
          className="text-blue-600 hover:underline"
        >
          Back to View
        </Link>
      </div>
    </div>
  );
}
