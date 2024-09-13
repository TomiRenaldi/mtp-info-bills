export const formatRupiah = (amount) => {
    return parseInt(amount, 10).toLocaleString('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
    });
  };
  