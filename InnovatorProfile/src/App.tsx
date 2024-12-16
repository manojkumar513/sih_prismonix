import React, { useState } from 'react';
import { ProfileHeader } from './components/ProfileHeader';
import { EditProfileForm } from './components/EditProfileForm';
import { CheckCircle } from 'lucide-react';

function App() {
  const [isEditing, setIsEditing] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [profile, setProfile] = useState({
    username: "Sarah Anderson",
    role: "Innovation Director",
    imageUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800"
  });

  const handleSave = (newProfile: typeof profile) => {
    setProfile(newProfile);
    setIsEditing(false);
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 3000);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Success Notification */}
      {showSuccess && (
        <div className="fixed top-4 right-4 flex items-center gap-2 bg-green-500 text-white px-4 py-2 rounded-lg shadow-lg animate-fade-in">
          <CheckCircle className="w-5 h-5" />
          <span>Profile updated successfully</span>
        </div>
      )}

      <div className="max-w-4xl mx-auto">
        <ProfileHeader
          username={profile.username}
          role={profile.role}
          imageUrl={profile.imageUrl}
          onEdit={() => setIsEditing(!isEditing)}
          isEditing={isEditing}
        />

        {isEditing ? (
          <EditProfileForm
            initialUsername={profile.username}
            initialRole={profile.role}
            initialImageUrl={profile.imageUrl}
            onSave={handleSave}
            onCancel={() => setIsEditing(false)}
          />
        ) : (
          <div className="p-6">
            {/* Add additional profile content here */}
          </div>
        )}
      </div>
    </div>
  );
}

export default App;