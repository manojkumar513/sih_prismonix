import React, { useState } from 'react';
import { ProfilePicture } from './components/ProfilePicture';
import { ProfileField } from './components/ProfileField';
import { Code2 } from 'lucide-react';

function App() {
  const [profileData, setProfileData] = useState({
    name: 'John Doe',
    gender: 'Male',
    profilePicture: '',
  });

  const handleFieldUpdate = (field: keyof typeof profileData) => (value: string) => {
    setProfileData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-3xl mx-auto py-12 px-4">
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          {/* Header Banner */}
          <div className="h-32 bg-gradient-to-r from-blue-500 to-purple-500"></div>
          
          {/* Profile Content */}
          <div className="px-8 pb-8">
            {/* Profile Picture Section */}
            <div className="flex justify-center -mt-16 mb-8">
              <ProfilePicture 
                imageUrl={profileData.profilePicture}
                onSave={handleFieldUpdate('profilePicture')}
              />
            </div>

            {/* Profile Information */}
            <div className="space-y-6">
              <ProfileField
                label="Name"
                value={profileData.name}
                onSave={handleFieldUpdate('name')}
              />
              
              <ProfileField
                label="Gender"
                value={profileData.gender}
                onSave={handleFieldUpdate('gender')}
                type="select"
                options={['Male', 'Female', 'Other']}
              />

              <ProfileField
                label="Role"
                value="Developer"
                onSave={() => {}}
                editable={false}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;