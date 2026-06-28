interface Props {
    title: string;
    value: number;
    icon: string;
    color: string;
}


export default function StatCard({
    title,
    value,
    icon,
    color
}: Props) {
    return (
        <div className="bg-white rounded-2xl shadow-2xl border p-6 ">
            <div className="flex justify-between">
                <div>
                    <p className="text-gray-500">
                        {title}
                    </p>
                    <h2 className="text-3xl font-bold mt-2">
                        {value}
                    </h2>
                    <p className="text-sm text-gray-400">
                        รายการ
                    </p>
                </div>
                  <div className={`text-3xl p-4 rounded-full ${color}`}>
                    {icon}
                </div>
            </div>
            <a className="text-blue-600 text-sm mt-5 block">
                ดูทั้งหมด →
            </a>
        </div>
    )
}