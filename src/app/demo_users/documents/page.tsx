import Link from "next/link";

export default function DocumentsPage() {
  return (
    <div>
      <h3>Documents</h3>

      <ul>
        <li>
          <Link href="/dumo_user/documents/view">
            Marksheet
          </Link>
        </li>
        <li>
          <Link href="/dumo_user/documents/view">
            Degree Certificate
          </Link>
        </li>
      </ul>
    </div>
  );
}
