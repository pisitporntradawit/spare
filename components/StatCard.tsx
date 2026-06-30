interface Props {
    title: string;
    value: number;
}


export default function StatCard({
    title,
    value
}: Props) {
    return (
        <div className="bg-white h-[164] rounded-2xl shadow-xl shadow-black/20 border-2 border-gray-400 px-3 py-4 hover:bg-blue-50">
            <div className="flex justify-between text-black">
                <div>
                    <p className="text-1xl">
                        {title}
                    </p>
                    <h2 className="text-3xl font-bold mt-2">
                        {value}
                    </h2>
                    <p className="text-sm">
                        รายการ
                    </p>
                </div>
            </div>
            <a className="text-blue-600 text-sm mt-5 block cursor-pointer">
                ดูทั้งหมด →
            </a>
        </div>
    )
}