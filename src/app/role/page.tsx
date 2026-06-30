import Sidebar from "../../../components/Sidebar";

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
    <div className="flex">
      <Sidebar />
      <div className="flex-1 p-8 bg-gray-50 text-black">
        <div className="flex flex-col justify-between mb-8">

          {roles.map((role: any) => (
            <div key={role.id}>
              {role.name}
            </div>
          ))}

        </div>
      </div>
    </div>
  )
}