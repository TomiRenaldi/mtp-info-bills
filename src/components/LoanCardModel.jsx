import React, { forwardRef } from 'react';
import Modal from 'react-modal';
import { formatRupiah } from '../utils/format';

const LoanCardModal = forwardRef(({ isOpen, onClose, loanData, handlePrint }, ref) => {
  return (
    <Modal isOpen={isOpen} onRequestClose={onClose} contentLabel="Preview Data Tagihan">
      <div ref={ref}>
        <h2>Kartu Informasi Tagihan</h2>
        <p><strong>Nama Nasabah:</strong> {loanData.name}</p>
        <p><strong>Jumlah Pinjaman:</strong> {formatRupiah(loanData.loanAmount)}</p>
        <p><strong>Tanggal Jatuh Tempo:</strong> {loanData.dueDate}</p>
      </div>
      <button onClick={handlePrint}>Print PDF</button>
      <button onClick={onClose}>Tutup</button>
    </Modal>
  );
});

export default LoanCardModal;
