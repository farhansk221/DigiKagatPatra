import Link from "next/link";

export default function UsersPage() {
  return (
    <div className="bg-white p-5 rounded-md border border-gray-300">
      <h3 className="text-lg font-semibold mb-4">Organization Users</h3>

      <Link href="/orgn/users/invite\" className="text-[#003366] font-medium hover:underline inline-block\">
        + Invite User
      </Link>
    </div>
  );
}
