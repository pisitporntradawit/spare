import {
    Home,
    Monitor,
    PlusCircle,
    Users,
    MapPin,
    Wrench,
    Settings,
    LucideIcon
} from "lucide-react";
import Link from "next/link";
type Menu = {
    name: string
    icon: LucideIcon
    link: string
}

const menus: Menu[] = [
    {
        name: "หน้าหลัก",
        icon: Home,
        link: "/"
    },
    {
        name: "อุปกรณ์",
        icon: Monitor,
        link: "/role"
    },
    {
        name: "เพิ่มอุปกรณ์",
        icon: PlusCircle,
        link: "/"
    },
    {
        name: "หมวดหมู่",
        icon: Users,
        link: "/"
    },
    {
        name: "สถานที่",
        icon: MapPin,
        link: "/"
    },
    {
        name: "บำรุงรักษา",
        icon: Wrench,
        link: "/"
    },
    {
        name: "ตั้งค่า",
        icon: Settings,
        link: "/"
    },
];

export default function Sidebar() {
    return (
        <aside className="w-64 min-h-screen bg-white border-r p-5">
            <h1 className="text-xl font-bold mb-8 text-blue-600">
                💻 IT Asset
            </h1>
            <nav className="space-y-2">
                {menus.map((menu, i) => (
                    <div
                        key={i}
                        className={`flex items-center gap-3 px-4 py-3 rounded-xl cursor-pointer
                        ${i === 0
                                ? "bg-blue-600 text-white"
                                : "hover:bg-gray-100"
                            }
                        `}
                    >
                        <menu.icon size={20} />
                        <Link href={menu.link}>
                            {menu.name}
                        </Link>
                    </div>
                ))}

            </nav>
            <div className="absolute bottom-2 p-4">
                👤 Admin
                <div className="text-sm text-gray-400">
                    ผู้ดูแลระบบ
                </div>
            </div>


        </aside>
    )
}