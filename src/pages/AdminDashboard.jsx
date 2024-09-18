import React, { useState, useRef } from "react";
import LoanForm from "../components/LoanForm";
import LoanCardModal from "../components/LoanCardModel";
import { useReactToPrint } from "react-to-print";
import { saveLoanData } from "../utils/storage";

const AdminDashboard = () => {
  const [loanData, setLoanData] = useState({
    numberDeal: "",
    noIndentity: "",
    name: "",
    loanAmount: "",
    openDate: "",
    dueDate: "",
    lastPayment: "",
  });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const componentRef = useRef();

  const handleChange = (e) => {
    setLoanData({
      ...loanData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSave = () => {
    saveLoanData(loanData);
    alert("Data berhasil disimpan");
    setIsModalOpen(true); // Buka modal setelah menyimpan data
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  return (
    <div className="mt-10 flex min-h-full flex-5 flex-col justify-center lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <img alt="MTP" src="/mtplogo.png" className="mx-auto h-10 w-auto" />
        <h1 className="mt-10 text-center text-2xl font-semibold leading-9 tracking-tight text-gray-900">
          Admin Dashboard
        </h1>
        <h2 className="text-center text-1xl leading-9 tracking-tight text-gray-400">
          Rekayasa Data Informasi Tagihan
        </h2>
        <LoanForm
          loanData={loanData}
          handleChange={handleChange}
          handleSave={handleSave}
        />
        <LoanCardModal
          isOpen={isModalOpen}
          onClose={closeModal}
          loanData={loanData}
          handlePrint={handlePrint}
          ref={componentRef}
        />
      </div>
    </div>
  );
};

export default AdminDashboard;
