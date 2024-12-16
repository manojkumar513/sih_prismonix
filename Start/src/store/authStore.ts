import { create } from 'zustand';
import { AuthState, UserRole } from '../types/auth';
import { DeveloperProfile } from '../types/developer';
import { InnovatorProfile } from '../types/innovator';
import { InvestorProfile } from '../types/investor';
import { storageService } from '../services/storage';

const getStoredUser = () => {
  const stored = localStorage.getItem('user');
  if (!stored) return null;
  
  const user = JSON.parse(stored);
  // Also save to JSON file when retrieving from localStorage
  storageService.saveUser(user);
  return user;
};

export const useAuthStore = create<AuthState>((set) => ({
  user: getStoredUser(),
  isAuthenticated: !!getStoredUser(),
  isRoleSelectionPending: false,
  isProfilePending: false,

  login: async (email: string, password: string) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    
    const user = {
      id: crypto.randomUUID(),
      email,
      name: email.split('@')[0],
    };
    
    localStorage.setItem('user', JSON.stringify(user));
    storageService.saveUser(user);
    set({ user, isAuthenticated: true });
  },

  signup: async (name: string, email: string, password: string) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    
    const user = {
      id: crypto.randomUUID(),
      email,
      name,
    };
    
    localStorage.setItem('user', JSON.stringify(user));
    storageService.saveUser(user);
    set({ 
      user, 
      isAuthenticated: true,
      isRoleSelectionPending: true 
    });
  },

  setUserRole: async (role: UserRole) => {
    await new Promise((resolve) => setTimeout(resolve, 500));
    
    const currentUser = getStoredUser();
    const updatedUser = { ...currentUser, role };
    
    localStorage.setItem('user', JSON.stringify(updatedUser));
    storageService.saveUser(updatedUser);
    set({ 
      user: updatedUser,
      isRoleSelectionPending: false,
      isProfilePending: true
    });
  },

  setDeveloperProfile: async (profile: DeveloperProfile) => {
    await new Promise((resolve) => setTimeout(resolve, 500));
    
    const currentUser = getStoredUser();
    const updatedUser = { ...currentUser, developerProfile: profile };
    
    localStorage.setItem('user', JSON.stringify(updatedUser));
    storageService.saveUser(updatedUser);
    set({
      user: updatedUser,
      isProfilePending: false
    });
  },

  setInnovatorProfile: async (profile: InnovatorProfile) => {
    await new Promise((resolve) => setTimeout(resolve, 500));
    
    const currentUser = getStoredUser();
    const updatedUser = { ...currentUser, innovatorProfile: profile };
    
    localStorage.setItem('user', JSON.stringify(updatedUser));
    storageService.saveUser(updatedUser);
    set({
      user: updatedUser,
      isProfilePending: false
    });
  },

  setInvestorProfile: async (profile: InvestorProfile) => {
    await new Promise((resolve) => setTimeout(resolve, 500));
    
    const currentUser = getStoredUser();
    const updatedUser = { ...currentUser, investorProfile: profile };
    
    localStorage.setItem('user', JSON.stringify(updatedUser));
    storageService.saveUser(updatedUser);
    set({
      user: updatedUser,
      isProfilePending: false
    });
  },

  logout: () => {
    const currentUser = getStoredUser();
    if (currentUser) {
      storageService.deleteUser(currentUser.id);
    }
    localStorage.removeItem('user');
    set({ 
      user: null, 
      isAuthenticated: false,
      isRoleSelectionPending: false,
      isProfilePending: false
    });
  },
}));