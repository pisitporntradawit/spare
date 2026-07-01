"use client";

import { useState } from "react";
import { UploadCloud, FileText } from "lucide-react";
import Link from "next/link";
import Sidebar from "../../../components/Sidebar";

export default function CreateInvoicePage() {

  const [fileName, setFileName] = useState("");

  function handleFile(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];

    if (file) {
      setFileName(file.name);
    }
  }


  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 bg-gray-200 text-black">
        <div className="flex justify-between p-4 border-b">
          <h1 className="text-3xl font-bold">
            Invoice
          </h1>
          <Link href={"/invoice/create"} className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-xl transition">
            + เพิ่ม Invoice
          </Link>
        </div>
      </div>
    </div>
  );
}