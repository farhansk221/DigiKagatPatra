import Link from "next/link";

export default function DocumentsPage() {
  return (
    <div>
      <h3>Documents</h3>

      <ul>
        <li>
          <Link href="/demo_users/documents/view">
            Marksheet
          </Link>
        </li>
        <li>
          <Link href="/demo_users/documents/view">
            Degree Certificate
          </Link>
        </li>
      </ul>
    </div>
  );
}
