import React from "react";

const LoanForm = ({ loanData, handleChange, handleSave }) => {
  return (
    <form>
      <div className="space-y-12 m-2">
        <div className="border-b border-gray-900/10 pb-12">
          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-full">
              <label
                htmlFor="number"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Nomor
              </label>
              <div className="mt-2">
                <input
                  type="number"
                  name="numberDeal"
                  placeholder="Nomor Deal"
                  value={loanData.numberDeal}
                  onChange={handleChange}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-300 focus:ring-2 focus:ring-inset focus:ring-neutral-950 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-full">
              <label
                htmlFor="number"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                No. Identitas (KTP)
              </label>
              <div className="mt-2">
                <input
                  type="number"
                  name="noIndentity"
                  placeholder="NIK"
                  value={loanData.noIndentity}
                  onChange={handleChange}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-300 focus:ring-2 focus:ring-inset focus:ring-neutral-950 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-full">
              <label
                htmlFor="name"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Nama
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="name"
                  placeholder="Nama Lengkap Client"
                  value={loanData.name}
                  onChange={handleChange}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-300 focus:ring-2 focus:ring-inset focus:ring-neutral-950 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="sm:col-span-full">
              <label
                htmlFor="loan-amount"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Total Tagihan
              </label>
              <div className="mt-2">
                <input
                  type="number"
                  name="loanAmount"
                  placeholder="Total Tagihan"
                  value={loanData.loanAmount}
                  onChange={handleChange}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-300 focus:ring-2 focus:ring-inset focus:ring-neutral-950 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label
                htmlFor="open-date"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Tanggal Buka Pinjam
              </label>
              <div className="mt-2">
                <input
                  type="date"
                  name="openDate"
                  value={loanData.openDate}
                  onChange={handleChange}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-300 focus:ring-2 focus:ring-inset focus:ring-neutral-950 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label
                htmlFor="last-payment-date"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Tanggal Bayar Terakhir
              </label>
              <div className="mt-2">
                <input
                  type="date"
                  name="dueDate"
                  value={loanData.dueDate}
                  onChange={handleChange}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-300 focus:ring-2 focus:ring-inset focus:ring-neutral-950 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-full">
              <label
                htmlFor="last-payment"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Pembayaran Terakhir
              </label>
              <div className="mt-2">
                <input
                  type="number"
                  name="lastPayment"
                  placeholder="Pembayaran Terakhir"
                  value={loanData.lastPayment}
                  onChange={handleChange}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-300 focus:ring-2 focus:ring-inset focus:ring-neutral-950 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-6 m-3 flex items-center justify-end gap-x-6">
        <button
          type="button"
          onClick={handleSave}
          className="rounded-md bg-blue-900 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-900"
        >
          Simpan
        </button>
      </div>
    </form>
  );
};

export default LoanForm;
