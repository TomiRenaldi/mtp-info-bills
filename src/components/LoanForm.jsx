import React from 'react';

const LoanForm = ({ loanData, handleChange, handleSave }) => {
  return (
    <form>
      <input
        type="text"
        name="name"
        placeholder="Nama Nasabah"
        value={loanData.name}
        onChange={handleChange}
      />
      <input
        type="number"
        name="loanAmount"
        placeholder="Jumlah Pinjaman"
        value={loanData.loanAmount}
        onChange={handleChange}
      />
      <input
        type="date"
        name="dueDate"
        value={loanData.dueDate}
        onChange={handleChange}
      />
      <button type="button" onClick={handleSave}>Simpan</button>
    </form>
  );
};

export default LoanForm;
