import type { Metadata } from 'next';
import LoanApplicationForm from '../../components/LoanApplicationForm';

export const metadata: Metadata = {
  title: 'Apply for a Personal Loan Online | Easy Personal Loan Services',
};

const ApplyLoanPage = () => {
  return <LoanApplicationForm />;
};

export default ApplyLoanPage;
