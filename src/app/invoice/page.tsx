import Link from "next/link";
import Sidebar from "../../../components/Sidebar";
import { promises } from "dns";

async function getinvoice(page: number, limit: number) {
  const res = await fetch(
    `${process.env.API_URL}/invoice?page=${page}&limit=${limit}`,
    {
      cache: "no-store",
    }
  )

  if (!res.ok) {
    throw new Error("Failed to fetch roles")
  }

  const data = await res.json()
  return data
}




export default async function GetAllInvoice({
  searchParams,
}: {
  searchParams: Promise<{
    page?: string;
    limit?: string;
  }>;
}) {
  const { page: pageParam, limit: limitParam } = await searchParams;
  const page = Number(pageParam) || 1
  const limit = Number(limitParam) || 20

  const data = await getinvoice(page, limit)
  const displayInvoice = data.items
  const rowsInCurrentPage = data.items.length;


  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 bg-gray-200 text-black min-h-screen">
        <div className="flex justify-between p-2 border-b">
          <h1 className="text-3xl font-bold">
            Invoice
          </h1>
          <Link href={"/invoice/create"} className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-xl transition">
            + เพิ่ม Invoice
          </Link>
        </div>
        <div className="bg-white mx-2 mt-2 ">
          <table className="w-full ">
            <thead>
              <tr className="border h-full bg-gray-400">
                <th className="border w-32 p-1">
                  Invoice Number
                </th>
                <th className="border w-32">
                  Date Invoice
                </th>
                <th className="border w-32">
                  Company
                </th>
                <th className="border w-32">
                  Edit
                </th>
              </tr>
            </thead>
            <tbody>
              {
                displayInvoice.map((invoice: any) => (
                  <tr key={invoice.id} className="text-center">
                    <td className="border">
                      {invoice.invoice_number}
                    </td>
                    <td className="border">
                      {invoice.received_date.split("T")[0]}
                    </td>
                    <td className="border">
                      {invoice.company_id}
                    </td>
                    <td className="border">
                      Edit
                    </td>
                  </tr>
                ))
              }
            </tbody>
          </table>
        </div>
        <div className="flex items-center justify-between mx-4">
            <div>
              <p>{rowsInCurrentPage} Rows</p>
            </div>
            <div className="text-right">
              {data.page > 1 && (
                <Link href={`?page=${data.page - 1}&limit=${data.limit}`}>
                  Previous
                </Link>
              )}

              <span>
                {" "} {data.page} / {data.totalPages} {" "}
              </span>

              {data.page < data.totalPages && (
                <Link href={`?page=${data.page + 1}&limit=${data.limit}`}>
                  Next
                </Link>
              )}
            </div>
          </div>
      </div>

    </div>
  );
}