import Sidebar from "../../components/Sidebar";
import StatCard from "../../components/StatCard";
import AssetTable from "../../components/AssetTable";


export default function Home() {
  return (
    <div className="flex bg-gray-50 min-h-screen text-black">
      <Sidebar />
      <main className="flex-1">
        <div className="flex justify-between p-4 border-b-1">
          <h1 className="text-3xl font-bold">
            หน้าหลัก
          </h1>
          <button className="bg-blue-600text-whitepx-5 py-3rounded-xl">
            + เพิ่มอุปกรณ์
          </button>
        </div>
        <div className="grid grid-cols-4 gap-4 space-y-4 m-2">
          <StatCard title="อุปกรณ์ทั้งหมด "value={128} />
          <StatCard title="ใช้งานอยู่" value={98} />
          <StatCard title="ซ่อม" value={7}/>
          <StatCard title="ปลดระวาง" value={23}/>
        </div>
        <div className="m-2">
        <AssetTable />
        </div>
      </main>
    </div>
  )
}