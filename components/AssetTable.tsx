const assets = [
    {
        id: "ITM-2024-00128",
        name: "Mouse",
        brand: "Logitech M331",
        status: "ใช้งานอยู่",
        user: "สมชาย ใจดี"
    },
    {
        id: "ITK-2024-00127",
        name: "Keyboard",
        brand: "Logitech K120",
        status: "ใช้งานอยู่",
        user: "วิภาวี ศรีสุข"
    },
    {
        id: "ITK-2024-00121",
        name: "Keyboard",
        brand: "Logitech K120",
        status: "ใช้งานอยู่",
        user: "วิภาวี ศรีสุข"
    },
    {
        id: "ITK-2024-00122",
        name: "Keyboard",
        brand: "Logitech K120",
        status: "ใช้งานอยู่",
        user: "วิภาวี ศรีสุข"
    },
    {
        id: "ITK-2024-00123",
        name: "Keyboard",
        brand: "Logitech K120",
        status: "ใช้งานอยู่",
        user: "วิภาวี ศรีสุข"
    },
    {
        id: "ITK-2024-4",
        name: "Keyboard",
        brand: "Logitech K120",
        status: "ใช้งานอยู่",
        user: "วิภาวี ศรีสุข"
    },
    {
        id: "ITK-2024-5",
        name: "Keyboard",
        brand: "Logitech K120",
        status: "ใช้งานอยู่",
        user: "วิภาวี ศรีสุข"
    },
    {
        id: "ITK-2024-006127",
        name: "Keyboard",
        brand: "Logitech K120",
        status: "ใช้งานอยู่",
        user: "วิภาวี ศรีสุข"
    },
    {
        id: "ITK-2024-7",
        name: "Keyboard",
        brand: "Logitech K120",
        status: "ใช้งานอยู่",
        user: "วิภาวี ศรีสุข"
    },
    {
        id: "ITK-2024-8",
        name: "Keyboard",
        brand: "Logitech K120",
        status: "ใช้งานอยู่",
        user: "วิภาวี ศรีสุข"
    },
    {
        id: "ITK-2024-9",
        name: "Keyboard",
        brand: "Logitech K120",
        status: "ใช้งานอยู่",
        user: "วิภาวี ศรีสุข"
    },

    {
        id: "ITC-2024-00126",
        name: "Computer",
        brand: "Dell Optiplex",
        status: "ใช้งานอยู่",
        user: "อนันต์ วงศ์ดี"
    }
]


export default function AssetTable() {
    const displayAssets = assets.slice(0,10);
    return (
        <div className="bg-white rounded-2xl border p-6 ">
            <h2 className="text-xl font-bold mb-5">
                อุปกรณ์ล่าสุด
            </h2>
            <table className="w-full">
                <thead>
                    <tr className="text-gray-500 border h-full">

                        <th className="text-left p-3 w-32">
                            รหัส
                        </th>

                        <th className="border w-32">
                            ชื่ออุปกรณ์
                        </th>

                        <th className="border w-32">
                            ยี่ห้อ
                        </th>

                        <th className="border w-32">
                            สถานะ
                        </th>

                        <th className="border w-32">
                            ผู้ใช้งาน
                        </th>

                    </tr>
                </thead>
                <tbody>
                    {displayAssets.map(a => (
                        <tr key={a.id} className="border-b hover:bg-gray-50">
                            <td className="p-3 border">
                                {a.id}
                            </td>
                            <td className="border text-center">
                                {a.name}
                            </td>
                            <td className="border  text-center">
                                {a.brand}
                            </td>
                            <td className="border  text-center">
                                <span className=" bg-green-100 text-green-600 px-3 py-1 rounded-full text-sm ">
                                    {a.status}
                                </span>
                            </td>
                            <td className="border text-center">
                                {a.user}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}