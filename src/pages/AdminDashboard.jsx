import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const AdminDashboard = () => {
  const navigate = useNavigate();
  const [loanData, setLoanData] = useState({
    name: "",
    loanAmount: "",
    dueDate: "",
  });

  useEffect(() => {
    const isAuthenticated = localStorage.getItem("isAuthenticated");
    if (!isAuthenticated) {
      navigate("/login");
    }
  }, [navigate]);

  const handleChange = (e) => {
    setLoanData({
      ...loanData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSave = () => {
    localStorage.setItem("loanInfo", JSON.stringify(loanData));
    alert("Data berhasil disimpan");
  };

  return (
    <div>
      <h2>Admin Dashboard</h2>
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
        <button type="button" onClick={handleSave}>
          Simpan
        </button>
      </form>
    </div>
  );
};

export default AdminDashboard;
