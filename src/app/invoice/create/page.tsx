"use client";

import React, { useState, SyntheticEvent, ChangeEvent } from "react";
import { UploadCloud, FileText } from "lucide-react";
import Link from "next/link";

export default function CreateInvoicePage() {
  const [newInvoice, setNewInvoice] = useState("")
  const [newReceived, setNewReceived] = useState("")
  const [newCompany, setNewCompany] = useState("")
  const [invoiceError, setInvoiceError] = useState("");
  const [message, setMessage] = useState("");
  const handleSubmit = async (
    e: SyntheticEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    if (!newInvoice.trim()) {
      setInvoiceError("Please enter invoice number");
      return;
    }



    const data = {
      invoice_number: newInvoice,
      received_date: newReceived,
      company_code: Number(newCompany),
    };
    const res = await fetch("http://localhost:30606/api/invoice/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data)
    })

    const result = await res.json()

    if (res.status === 201) {
      setMessage("Create Invoice Success");
    } else {
      setMessage("Create Invoice Failed");
    }

  };
  // const [fileName, setFileName] = useState("")

  // function handleFile(e: React.ChangeEvent<HTMLInputElement>) {
  //   const file = e.target.files?.[0];

  //   if (file) {
  //     setFileName(file.name);
  //   }
  // }


  return (
    <main className=" min-h-screen bg-gray-50 flex items-center justify-center p-6">
      <form
        onSubmit={handleSubmit}
        className=" w-full max-w-2xl bg-whit rounded-2xl borde border-gray-200 shadow-lg shadow-black/10 p-8">
        <div className="mb-8">
          <h1 className="
            text-3xl
            font-bold
            text-gray-900
          ">
            Create Invoice
          </h1>
          <p className="
            text-sm
            text-gray-500
            mt-2
          ">
            Create a new invoice and upload document
          </p>
        </div>
        <div className="space-y-5">
          <div>
            <label className="
              block
              text-sm
              font-medium
              mb-2
              uppercase
            ">
              Invoice Number
            </label>
            <input
              type="text"
              placeholder={invoiceError
                ? invoiceError
                : "INV-001"
              }
              value={newInvoice}
              onChange={(e) => {
                setNewInvoice(e.target.value.toUpperCase())
                setInvoiceError("")
              }}
              className={`
                w-full
                rounded-xl
                border
                px-4
                py-3
                outline-none
                focus:ring-2
                focus:ring-blue-500
                transition

                ${invoiceError
                  ? "border-red-500 placeholder:text-red-500"
                  : ""
                }
              `}
            />
          </div>
          <div>

            <label
              className="
                block
                text-sm
                font-medium
                mb-2
              "
            >
              Received Date
            </label>
            <input
              type="date"
              value={newReceived}
              onChange={(e) => setNewReceived(e.target.value)}
              className="
                w-full
                rounded-xl
                border
                px-4
                py-3
                focus:ring-2
                focus:ring-blue-500
                outline-none
              "
            />
          </div>
          <div>
            <label
              className="
              block
              text-sm
              font-medium
              mb-2
              "
            >
              Company
            </label>
            <select
              value={newCompany}
              onChange={(e) => setNewCompany(e.target.value)}
              className="
                w-full
                rounded-xl
                border
                px-4
                py-3
                bg-white
                focus:ring-2
                focus:ring-blue-500
                outline-none
              "
            >
              <option>
                Select company
              </option>

              <option>
                1
              </option>

              <option>
                2
              </option>


            </select>

          </div>
          <div>
            <label
              className="
              block
              text-sm
              font-medium
              mb-2
              "
            >
              Invoice File
            </label>
            {/* <label
              className="
                flex
                flex-col
                items-center
                justify-center
                h-40
                rounded-xl
                border-2
                border-dashed
                border-gray-300
                cursor-pointer
                hover:bg-blue-50
                transition
              "
            >

              <UploadCloud
                size={36}
                className="text-blue-500"
              />

              <p className="
                mt-3
                text-sm
                text-gray-500
              ">
                Click to upload file
              </p>

              {
                fileName &&
                <p className="
                  mt-2
                  flex
                  items-center
                  gap-2

                  text-sm
                  text-green-600
                ">

                  <FileText size={16} />

                  {fileName}

                </p>
              }


              <input

                type="file"

                onChange={""}

                className="
                  hidden
                "

              />

            </label> */}


          </div>


        </div>



        {/* Action */}

        <div
          className="
            mt-8
            flex
            justify-end
            gap-3
          "
        >

          <Link
            href="/"
            className="
              px-5
              py-3

              rounded-xl

              border

              hover:bg-gray-100

              transition
            "
          >
            Cancel
          </Link>



          <button

            className="
              px-5
              py-3

              rounded-xl

              bg-blue-600

              text-white

              hover:bg-blue-700

              transition

              shadow-md
              shadow-blue-600/20
            "
          >
            Create Invoice
          </button>


        </div>
        {
          message && (
            <div
              className="
        fixed
        inset-0
        flex
        items-center
        justify-center
        bg-black/80
        z-50
      "
            >
              <div
                className="
          text-white
          px-6
          py-4
          rounded-xl
          flex
          flex-col
          items-center
          gap-3
        "
              >
                {message}

                <Link href={"/"}
                  className="
            bg-white
            text-green-600
            px-5
            py-2
            rounded-lg
            hover:bg-blue-300
          "
                >
                  OK
                </Link>

              </div>
            </div>
          )
        }

      </form>


    </main>
  );
}