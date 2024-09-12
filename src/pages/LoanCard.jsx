// src/pages/LoanCard.jsx
import { useState, useEffect } from 'react';

const LoanCard = () => {
  const [loanInfo, setLoanInfo] = useState({ name: '', loanAmount: '', dueDate: '' });

  useEffect(() => {
    const savedLoanInfo = localStorage.getItem('loanInfo');
    if (savedLoanInfo) {
      setLoanInfo(JSON.parse(savedLoanInfo));
    }
  }, []);

  return (
    <div>
      <h2>Kartu Informasi Tagihan</h2>
      <p><strong>Nama Nasabah:</strong> {loanInfo.name}</p>
      <p><strong>Jumlah Pinjaman:</strong> {loanInfo.loanAmount}</p>
      <p><strong>Tanggal Jatuh Tempo:</strong> {loanInfo.dueDate}</p>
    </div>
  );
};

export default LoanCard;
