import React, { useEffect, useState } from 'react';
import { useAuthStore } from '../store/authStore';
import { LogOut, Users } from 'lucide-react';
import { storageService } from '../services/storage';

const getRoleEmoji = (role?: string) => {
  switch (role) {
    case 'developer':
      return '👨‍💻';
    case 'investor':
      return '💰';
    case 'innovator':
      return '💡';
    default:
      return '👤';
  }
};

const Dashboard: React.FC = () => {
  const { user, logout } = useAuthStore();
  const [allUsers, setAllUsers] = useState<any[]>([]);

  useEffect(() => {
    setAllUsers(storageService.getAllUsers());
  }, []);

  const renderProfileDetails = () => {
    if (user?.role === 'developer' && user.developerProfile) {
      return (
        <>
          <p className="text-gray-600">
            <span className="font-medium">Current Role:</span> {user.developerProfile.currentRole}
          </p>
          <p className="text-gray-600">
            <span className="font-medium">Experience:</span> {user.developerProfile.experience}
          </p>
          <p className="text-gray-600">
            <span className="font-medium">Location:</span> {user.developerProfile.address}
          </p>
          <p className="text-gray-600">
            <span className="font-medium">Work Environment:</span> {user.developerProfile.workEnvironment}
          </p>
          <div className="text-gray-600">
            <span className="font-medium">Skills:</span>
            <div className="flex flex-wrap gap-2 mt-2">
              {user.developerProfile.skills.map(skill => (
                <span key={skill} className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                  {skill}
                </span>
              ))}
            </div>
          </div>
          {user.developerProfile.portfolioUrl && (
            <p className="text-gray-600">
              <span className="font-medium">Portfolio:</span>{' '}
              <a href={user.developerProfile.portfolioUrl} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">
                View Portfolio
              </a>
            </p>
          )}
        </>
      );
    } else if (user?.role === 'innovator' && user.innovatorProfile) {
      return (
        <>
          <p className="text-gray-600">
            <span className="font-medium">Current Role:</span> {user.innovatorProfile.currentRole}
          </p>
          <p className="text-gray-600">
            <span className="font-medium">Education:</span> {user.innovatorProfile.education}
          </p>
          <p className="text-gray-600">
            <span className="font-medium">Location:</span> {user.innovatorProfile.address}
          </p>
          <div className="text-gray-600">
            <span className="font-medium">Skills:</span>
            <div className="flex flex-wrap gap-2 mt-2">
              {user.innovatorProfile.skills.map(skill => (
                <span key={skill} className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                  {skill}
                </span>
              ))}
            </div>
          </div>
          <div className="text-gray-600">
            <span className="font-medium">Industry Focus:</span>
            <div className="flex flex-wrap gap-2 mt-2">
              {user.innovatorProfile.industryFocus.map(industry => (
                <span key={industry} className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">
                  {industry.replace(/([A-Z&])/g, ' $1').trim()}
                </span>
              ))}
            </div>
          </div>
          <div className="text-gray-600">
            <span className="font-medium">Innovation Categories:</span>
            <div className="flex flex-wrap gap-2 mt-2">
              {user.innovatorProfile.innovationCategory.map(category => (
                <span key={category} className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm">
                  {category}
                </span>
              ))}
            </div>
          </div>
          <div className="text-gray-600">
            <span className="font-medium">Looking For:</span>
            <div className="flex flex-wrap gap-2 mt-2">
              {user.innovatorProfile.lookingFor.map(item => (
                <span key={item} className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm">
                  {item}
                </span>
              ))}
            </div>
          </div>
          {user.innovatorProfile.portfolioUrl && (
            <p className="text-gray-600">
              <span className="font-medium">Portfolio:</span>{' '}
              <a href={user.innovatorProfile.portfolioUrl} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">
                View Portfolio
              </a>
            </p>
          )}
        </>
      );
    } else if (user?.role === 'investor' && user.investorProfile) {
      return (
        <>
          <p className="text-gray-600">
            <span className="font-medium">Education:</span> {user.investorProfile.education}
          </p>
          <p className="text-gray-600">
            <span className="font-medium">Location:</span> {user.investorProfile.address}
          </p>
          <div className="text-gray-600">
            <span className="font-medium">Investment Focus:</span>
            <div className="flex flex-wrap gap-2 mt-2">
              {user.investorProfile.investmentFocus.map(focus => (
                <span key={focus} className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                  {focus}
                </span>
              ))}
            </div>
          </div>
          <p className="text-gray-600">
            <span className="font-medium">Capital Range:</span> {user.investorProfile.capitalRange}
          </p>
          <p className="text-gray-600">
            <span className="font-medium">Preferred Investment Stage:</span> {user.investorProfile.preferredInvestmentStage}
          </p>
          <div className="text-gray-600">
            <span className="font-medium">Portfolio Companies:</span>
            <p className="mt-2 whitespace-pre-wrap">{user.investorProfile.portfolioCompanies}</p>
          </div>
          {user.investorProfile.portfolioUrl && (
            <p className="text-gray-600">
              <span className="font-medium">Portfolio:</span>{' '}
              <a href={user.investorProfile.portfolioUrl} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">
                View Portfolio
              </a>
            </p>
          )}
        </>
      );
    }
    return null;
  };

  return (
    <div className="w-full max-w-4xl p-8 bg-white rounded-lg shadow-lg">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Dashboard</h1>
        <button
          onClick={logout}
          className="flex items-center gap-2 px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg transition duration-200"
        >
          <LogOut size={20} />
          Sign Out
        </button>
      </div>

      <div className="bg-gray-50 p-6 rounded-lg mb-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Profile Information</h2>
        <div className="space-y-3">
          <p className="text-gray-600">
            <span className="font-medium">Name:</span> {user?.name}
          </p>
          <p className="text-gray-600">
            <span className="font-medium">Email:</span> {user?.email}
          </p>
          <p className="text-gray-600">
            <span className="font-medium">Role:</span> {getRoleEmoji(user?.role)} {user?.role ? user.role.charAt(0).toUpperCase() + user.role.slice(1) : 'Not set'}
          </p>
          {renderProfileDetails()}
        </div>
      </div>

      <div className="bg-blue-50 p-6 rounded-lg mb-6">
        <div className="flex items-center gap-2 mb-4">
          <Users className="text-blue-600" size={24} />
          <h2 className="text-xl font-semibold text-blue-800">Network Members</h2>
        </div>
        <div className="space-y-4">
          {allUsers.filter(u => u.id !== user?.id).map(otherUser => (
            <div key={otherUser.id} className="p-4 bg-white rounded-lg shadow">
              <div className="flex items-center gap-2">
                <span className="text-2xl">{getRoleEmoji(otherUser.role)}</span>
                <div>
                  <h3 className="font-semibold text-gray-800">{otherUser.name}</h3>
                  <p className="text-sm text-gray-600">{otherUser.role ? otherUser.role.charAt(0).toUpperCase() + otherUser.role.slice(1) : 'Role not set'}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-blue-50 p-6 rounded-lg">
        <h2 className="text-xl font-semibold text-blue-800 mb-4">Welcome Message</h2>
        <p className="text-blue-600">
          Welcome to your dashboard, {user?.name}! This is a secure area where you can manage your account
          and access your personal information.
        </p>
      </div>
    </div>
  );
};

export default Dashboard;