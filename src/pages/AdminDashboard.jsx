import React, { useState, useRef } from "react";
import LoanForm from "../components/LoanForm";
import LoanCardModal from "../components/LoanCardModel";
import { useReactToPrint } from "react-to-print";
import { saveLoanData } from "../utils/storage";

const AdminDashboard = () => {
  const [loanData, setLoanData] = useState({
    name: "",
    loanAmount: "",
    dueDate: "",
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
    <div>
      <h2>Admin Dashboard</h2>
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
  );
};

export default AdminDashboard;
