import React from 'react';
import { useAuthStore } from '../store/authStore';
import { UserRole } from '../types/auth';
import { Code2, Lightbulb, Wallet } from 'lucide-react';
import toast from 'react-hot-toast';

const roles: { id: UserRole; title: string; description: string; icon: React.ReactNode }[] = [
  {
    id: 'developer',
    title: 'Developer',
    description: 'Build and contribute to innovative projects',
    icon: <Code2 size={24} className="text-blue-500" />,
  },
  {
    id: 'investor',
    title: 'Investor',
    description: 'Fund promising projects and startups',
    icon: <Wallet size={24} className="text-green-500" />,
  },
  {
    id: 'innovator',
    title: 'Innovator',
    description: 'Share ideas and lead new initiatives',
    icon: <Lightbulb size={24} className="text-yellow-500" />,
  },
];

const RoleSelection: React.FC = () => {
  const { setUserRole } = useAuthStore();

  const handleRoleSelect = async (role: UserRole) => {
    try {
      await setUserRole(role);
      toast.success(`Welcome! You're now registered as a ${role}`);
    } catch (error) {
      toast.error('Failed to set role. Please try again.');
    }
  };

  return (
    <div className="w-full max-w-4xl p-8 bg-white rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold text-center mb-4 text-gray-800">Choose Your Role</h2>
      <p className="text-center text-gray-600 mb-8">
        Select the role that best describes your primary interest in our platform
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {roles.map((role) => (
          <button
            key={role.id}
            onClick={() => handleRoleSelect(role.id)}
            className="p-6 border-2 border-gray-200 rounded-lg hover:border-blue-500 transition-all duration-200 group flex flex-col items-center text-center"
          >
            <div className="mb-4 transform group-hover:scale-110 transition-transform duration-200">
              {role.icon}
            </div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">{role.title}</h3>
            <p className="text-gray-600">{role.description}</p>
          </button>
        ))}
      </div>
    </div>
  );
}

export default RoleSelection;