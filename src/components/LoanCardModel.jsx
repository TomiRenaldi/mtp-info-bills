import React, { forwardRef } from "react";
import Modal from "react-modal";
import { formatRupiah } from "../utils/format";

const LoanCardModel = forwardRef(
  ({ isOpen, onClose, loanData, handlePrint }, ref) => {
    return (
      <Modal
        isOpen={isOpen}
        onRequestClose={onClose}
        contentLabel="Preview Data Tagihan"
      >
        <div
          ref={ref}
          className="mt-10 flex flex-col items-center justify-center h-full w-full space-y-6"
        >
          <div className="px-4 sm:px-0 text-center">
            <img
              alt="MTP"
              src="/cashwagon.png"
              className="mx-auto h-12 w-auto"
            />
            <h3 className="text-base font-semibold leading-6 text-gray-700 mt-3">
              Aplikasi Informasi Tagihan
            </h3>
            <p className="max-w-2xl text-sm leading-6 text-gray-500 mb-5">
              Data Tagihan Cashloan klien dan Informasi Pembayaran
            </p>
          </div>

          {/* Percetakan */}
          <div className="border-t border-gray-100">
            <dl className="divide-y divide-gray-100">
              <div className="px-2 py-2 sm:grid sm:grid-cols-4 sm:gap-4 sm:px-0">
                <dt className="text-sm font-medium leading-6 text-gray-900">
                  Nomor
                </dt>
                <dd className="text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                  {loanData.numberDeal}
                </dd>
              </div>
              <div className="px-2 py-2 sm:grid sm:grid-cols-4 sm:gap-4 sm:px-0">
                <dt className="text-sm font-medium leading-6 text-gray-900">
                  No. Identitas (NIK)
                </dt>
                <dd className="text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                  {loanData.noIndentity}
                </dd>
              </div>
              <div className="px-2 py-2 sm:grid sm:grid-cols-4 sm:gap-4 sm:px-0">
                <dt className="text-sm font-medium leading-6 text-gray-900">
                  Nama Klien
                </dt>
                <dd className="text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                  {loanData.name}
                </dd>
              </div>
              <div className="px-2 py-2 sm:grid sm:grid-cols-4 sm:gap-4 sm:px-0">
                <dt className="text-sm font-medium leading-6 text-gray-900 ">
                  Total Tagihan
                </dt>
                <dd className="text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                  {formatRupiah(loanData.loanAmount)} ()
                </dd>
              </div>
              <div className="px-2 py-2 sm:grid sm:grid-cols-4 sm:gap-4 sm:px-0">
                <dt className="text-sm font-medium leading-6 text-gray-900">
                  Tanggal Pinjam
                </dt>
                <dd className="text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                  {loanData.openDate}
                </dd>
              </div>
              <div className="px-2 py-2 sm:grid sm:grid-cols-4 sm:gap-4 sm:px-0">
                <dt className="text-sm font-medium leading-6 text-gray-900">
                  Tanggal Bayar Terakhir
                </dt>
                <dd className="text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                  {loanData.dueDate}
                </dd>
              </div>
              <div className="px-2 py-2 sm:grid sm:grid-cols-4 sm:gap-4 sm:px-0">
                <dt className="text-sm font-medium leading-6 text-gray-900">
                  Pembayaran Terakhir
                </dt>
                <dd className="text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                  {formatRupiah(loanData.lastPayment)}
                </dd>
              </div>
              <div className="px-2 py-2 sm:grid sm:grid-cols-4 sm:gap-4 sm:px-0">
                <dt className="text-sm font-medium leading-6 text-gray-900">
                  No.Virtual Account
                </dt>
                <dd className="text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                  {loanData.name}
                </dd>
              </div>
            </dl>
          </div>
        </div>

        <div className="mt-20 m-10 flex items-center justify-end gap-x-6">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600"
          >
            Tutup
          </button>
          <button
            onClick={handlePrint}
            className="rounded-xl bg-blue-900 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-900"
          >
            Print PDF
          </button>
        </div>
      </Modal>
    );
  }
);

export default LoanCardModel;
