import React from "react";

const LoanForm = ({ loanData, handleChange, handleSave }) => {
  return (
    <form>
      <label
        htmlFor="Nomor"
        className="block text-sm font-medium leading-6 text-gray-900"
      >
        Nomor:
      </label>
      <div className="">
        <input
          type="number"
          name="numberDeal"
          placeholder="Nomor Deal"
          value={loanData.numberDeal}
          onChange={handleChange}
        />
      </div>
      <p>Nama:</p>
      <input
        type="text"
        name="name"
        placeholder="Nama"
        value={loanData.name}
        onChange={handleChange}
      />
      <p>Total Tagihan:</p>
      <input
        type="number"
        name="loanAmount"
        placeholder="Total Tagihan"
        value={loanData.loanAmount}
        onChange={handleChange}
      />
      <p>Pembayaran Terakhir:</p>
      <input
        type="date"
        name="dueDate"
        value={loanData.dueDate}
        onChange={handleChange}
      />
      <button type="button" onClick={handleSave}>
        Simpan
      </button>
    </form>
  );
};

export default LoanForm;
