import Sidebar from "../../../components/Sidebar";

async function getRoles() {
  const res = await fetch(
    `${process.env.API_URL}/role`,
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
      <div className="flex-1 bg-gray-200 text-black">
        <div className="flex justify-between p-4 border-b-1">
          <h1 className="text-3xl font-bold">
            Roles
          </h1>
          <button className="bg-blue-600text-whitepx-5 py-3rounded-xl">
            + เพิ่ม Role
          </button>
        </div>
        <div className="flex flex-col justify-between mb-8 p-2">

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