export const saveLoanData = (loanData) => {
    localStorage.setItem('loanInfo', JSON.stringify(loanData));
  };
  
  export const getLoanData = () => {
    const savedLoanData = localStorage.getItem('loanInfo');
    return savedLoanData ? JSON.parse(savedLoanData) : null;
  };
  