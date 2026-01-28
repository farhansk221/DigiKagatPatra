export type OrgUser = {
  id: string;
  name: string;
  email: string;
  role: "OWNER" | "ADMIN" | "EDITOR" | "VIEWER";
};

export type Organization = {
  id: string;
  name: string;
  country: string;
  users: OrgUser[];
};

// Demo organizations with users
export const organizations: Organization[] = [
  {
    id: "BMC",
    name: "DigiKagatPatra HQ",
    country: "India",
    users: [
      { id: "u1", name: "Farhan Shaikh", email: "farhan@example.com", role: "OWNER" },
      { id: "u2", name: "Anita Verma", email: "anita@example.com", role: "ADMIN" },
      { id: "u3", name: "Rohit Singh", email: "rohit@example.com", role: "EDITOR" },
      { id: "u4", name: "Priya Nair", email: "priya@example.com", role: "EDITOR" },
      { id: "u5", name: "Vikram Das", email: "vikram@example.com", role: "VIEWER" },
    ],
  },
  {
    id: "TMC",
    name: "Maharashtra Stamp Dept",
    country: "India",
    users: [
      { id: "u6", name: "Sneha Kulkarni", email: "sneha@example.com", role: "OWNER" },
      { id: "u7", name: "Arjun Patil", email: "arjun@example.com", role: "ADMIN" },
      { id: "u8", name: "Kiran Desai", email: "kiran@example.com", role: "EDITOR" },
      { id: "u9", name: "Meera Joshi", email: "meera@example.com", role: "VIEWER" },
    ],
  },
  {
    id: "KMC",
    name: "Delhi High Court",
    country: "India",
    users: [
      { id: "u10", name: "Rahul Mehta", email: "rahul@example.com", role: "OWNER" },
      { id: "u11", name: "Kavya Rao", email: "kavya@example.com", role: "ADMIN" },
      { id: "u12", name: "Imran Khan", email: "imran@example.com", role: "EDITOR" },
      { id: "u13", name: "Neha Gupta", email: "neha@example.com", role: "VIEWER" },
      { id: "u14", name: "Sameer Ali", email: "sameer@example.com", role: "VIEWER" },
    ],
  },
];


