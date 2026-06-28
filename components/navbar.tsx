import Link from "next/link";


export default function Navbar() {
  return (
    <nav className="flex items-center justify-between p-5 border-b bg-gray-800">
      <div className="font-bold text-xl">
        My App
      </div>
      <div className="flex gap-5">
        <Link href="/">
          Home
        </Link>
        <Link href="/role">
          Page 2
        </Link>
        <Link href="/users">
          Users
        </Link>
      </div>
    </nav>
  );
}