async function getRoles() {
  const res = await fetch(
    "https://go-backend-vercel.vercel.app/api/role/",
    {
      cache: "no-store",
    }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch roles");
  }

  return res.json();
}


export default async function Home() {

  const roles = await getRoles();


  return (
    <main className="p-10">

      <h1 className="text-2xl font-bold">
        Roles
      </h1>


      {roles.map((role:any) => (
        <div key={role.id}>
          {role.name}
        </div>
      ))}


    </main>
  );
}