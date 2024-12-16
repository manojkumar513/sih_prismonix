import React, { useState } from 'react';
import { ProfilePicture } from './components/ProfilePicture';
import { InvestorDetails } from './components/InvestorDetails';
import { Profile } from './types/profile';

function App() {
  const [profile, setProfile] = useState<Profile>({
    picture: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=400',
    name: 'Alex Thompson',
    gender: 'Male',
    role: 'Investor'
  });

  const handleUpdate = (field: keyof Profile, value: any) => {
    setProfile(prev => ({
      ...prev,
      [field]: value
    }));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-3xl mx-auto py-12 px-4">
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="bg-blue-600 h-32"></div>
          <div className="px-6 pb-6">
            <div className="-mt-16 mb-6">
              <ProfilePicture
                imageUrl={profile.picture}
                onUpdate={(url) => handleUpdate('picture', url)}
              />
            </div>
            
            <InvestorDetails
              profile={profile}
              onUpdate={handleUpdate}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;