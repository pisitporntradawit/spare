import {
    Home,
    Book,
    User,
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
        name: "Invoice",
        icon: Book,
        link: "/invoice"
    },
        {
        name: "Role",
        icon: User,
        link: "/role"
    },
];

export default function Sidebar() {
    return (
        <aside className="flex min-h-screen bg-white border-r p-5 items-stretch">
            <div className="flex flex-col">
                <h1 className="text-xl font-bold mb-8 text-blue-600">
                    💻 IT Asset
                </h1>
                <nav className="space-y-2">
                    {menus.map((menu, i) => (
                        <div
                            key={i}
                            className={`flex items-center gap-3 px-4 py-3 rounded-xl cursor-pointer text-cyan-700
                        ${i === 0
                                    ? "bg-blue-600 text-white"
                                    : "hover:bg-blue-100"
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
                <div className="mt-auto">
                    👤 Admin
                    <div className="text-sm text-gray-400">
                        ผู้ดูแลระบบ
                    </div>
                </div>
            </div>

        </aside>
    )
}