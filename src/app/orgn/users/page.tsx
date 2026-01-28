import Link from "next/link";

export default function UsersPage() {
  return (
    <div style={card}>
      <h3>Organization Users</h3>

      <Link href="/orgn/users/invite">Invite User</Link>
    </div>
  );
}

const card = {
  backgroundColor: "#fff",
  padding: "20px",
  borderRadius: "6px",
  border: "1px solid #E0E0E0",
};
