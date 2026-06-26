import Link from "next/link";
export default async function Home() {
  return (
    <main>
      <h1 className="text-2xl font-bold">
        <Link href="/role">
        Roles
        </Link> 
      </h1>
    </main>

  );
}