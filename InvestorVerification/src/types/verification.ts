export interface VerificationFormData {
  governmentId: File | null;
  email: string;
  phoneNumber: string;
  bankAccount: string;
  ifscCode: string;
  previousInvestments?: string;
  bankStatements?: File | null;
}

export type InvestorType = 'new' | 'existing';