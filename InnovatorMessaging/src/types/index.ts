export interface Follower {
  id: string;
  name: string;
  avatar: string;
  isOnline: boolean;
}

export interface Message {
  id: number;
  content: string;
  senderId: string;
  receiverId: string;
  timestamp: string;
}

export interface NDAFormData {
  parties: string;
  terms: string;
  effectiveDate: string;
  validityPeriod: '1 Year' | '3 Years' | 'Indefinite';
  yourSignature?: File;
  otherPartySignature?: File;
}

export interface SubmittedNDA extends Omit<NDAFormData, 'yourSignature' | 'otherPartySignature'> {
  id: string;
  submittedAt: string;
  status: 'pending' | 'approved' | 'rejected';
}