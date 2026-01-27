import Link from "next/link";

export default function AdminDashboard(){
    return (
        <div className="flex gap-4">
            <Link href="/admin/organization">Organization</Link>
            <Link href="/admin/settings">Settings</Link>
            <Link href="/admin/user">user</Link>
        </div>

    )
}