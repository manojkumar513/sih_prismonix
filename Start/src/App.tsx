import React from 'react';
import { Toaster } from 'react-hot-toast';
import { useAuthStore } from './store/authStore';
import AuthForm from './components/AuthForm';
import Dashboard from './components/Dashboard';
import RoleSelection from './components/RoleSelection';
import DeveloperProfileForm from './components/DeveloperProfileForm';
import InnovatorProfileForm from './components/InnovatorProfileForm';
import InvestorProfileForm from './components/InvestorProfileForm';

function App() {
  const { isAuthenticated, isRoleSelectionPending, isProfilePending, user } = useAuthStore();

  const getProfileForm = () => {
    if (user?.role === 'developer') {
      return <DeveloperProfileForm />;
    } else if (user?.role === 'innovator') {
      return <InnovatorProfileForm />;
    } else if (user?.role === 'investor') {
      return <InvestorProfileForm />;
    }
    return null;
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      {!isAuthenticated ? (
        <AuthForm />
      ) : isRoleSelectionPending ? (
        <RoleSelection />
      ) : isProfilePending ? (
        getProfileForm()
      ) : (
        <Dashboard />
      )}
      <Toaster position="top-right" />
    </div>
  );
}

export default App;