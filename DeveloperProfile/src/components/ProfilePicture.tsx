import React, { useState } from 'react';
import { Camera } from 'lucide-react';
import { ProfilePictureModal } from './ProfilePictureModal';

interface ProfilePictureProps {
  imageUrl: string;
  onSave: (image: string) => void;
}

export function ProfilePicture({ imageUrl, onSave }: ProfilePictureProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(imageUrl);

  const handleSave = (newImage: string) => {
    setCurrentImage(newImage);
    onSave(newImage);
  };

  return (
    <div className="relative group">
      <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-lg">
        <img
          src={currentImage || "https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=400&auto=format&fit=crop&q=80"}
          alt="Profile"
          className="w-full h-full object-cover"
        />
      </div>
      
      <button
        onClick={() => setIsModalOpen(true)}
        className="absolute bottom-0 right-0 bg-blue-500 p-2 rounded-full text-white opacity-0 group-hover:opacity-100 transition-opacity"
      >
        <Camera size={20} />
      </button>

      <ProfilePictureModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSave={handleSave}
        currentImage={currentImage}
      />
    </div>
  );
}