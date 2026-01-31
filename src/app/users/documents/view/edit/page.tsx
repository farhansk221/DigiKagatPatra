import Link from "next/link";

export default function EditDocument() {
  return (
    <div className="bg-white p-5 rounded-md border border-gray-300 max-w-xl">
      <h3 className="text-lg font-semibold mb-4">Edit Document</h3>

      <input
        defaultValue="Marksheet"
        className="w-full border border-gray-300 rounded-md p-2 mb-4 focus:outline-none focus:ring-2 focus:ring-[#1F5F8B]"
      />

      <textarea
        rows={5}
        defaultValue="Document content here..."
        className="w-full border border-gray-300 rounded-md p-2 mb-4 focus:outline-none focus:ring-2 focus:ring-[#1F5F8B]"
      />

      <button className="bg-[#1F5F8B] text-white px-4 py-2 rounded-md hover:bg-[#0B3C5D] mb-4 transition-colors">
        Save (Dummy)
      </button>

      <div>
        <Link
          href="/users/documents/view"
          className="text-[#1F5F8B] hover:underline inline-block"
        >
          Back to View
        </Link>
      </div>
    </div>
  );
}
