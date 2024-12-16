import { DeveloperProfile } from './developer';
import { InnovatorProfile } from './innovator';
import { InvestorProfile } from './investor';

export type UserRole = 'developer' | 'investor' | 'innovator';

export interface User {
  id: string;
  email: string;
  name: string;
  role?: UserRole;
  developerProfile?: DeveloperProfile;
  innovatorProfile?: InnovatorProfile;
  investorProfile?: InvestorProfile;
}

export interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  isRoleSelectionPending: boolean;
  isProfilePending: boolean;
  login: (email: string, password: string) => Promise<void>;
  signup: (name: string, email: string, password: string) => Promise<void>;
  setUserRole: (role: UserRole) => Promise<void>;
  setDeveloperProfile: (profile: DeveloperProfile) => Promise<void>;
  setInnovatorProfile: (profile: InnovatorProfile) => Promise<void>;
  setInvestorProfile: (profile: InvestorProfile) => Promise<void>;
  logout: () => void;
}

export interface LoginFormData {
  email: string;
  password: string;
}

export interface SignupFormData {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}