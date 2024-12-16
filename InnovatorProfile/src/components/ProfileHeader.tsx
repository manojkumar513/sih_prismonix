import React from 'react';
import { PencilIcon } from 'lucide-react';

type ProfileHeaderProps = {
  username: string;
  role: string;
  imageUrl: string;
  onEdit: () => void;
  isEditing: boolean;
};

export function ProfileHeader({ username, role, imageUrl, onEdit, isEditing }: ProfileHeaderProps) {
  return (
    <div className="relative flex flex-col items-center p-6 bg-gradient-to-b from-blue-50 to-white">
      <div className="absolute right-4 top-4 md:hidden">
        <button
          onClick={onEdit}
          className="p-2 rounded-full bg-white shadow-md hover:bg-gray-50 transition-colors"
          aria-label={isEditing ? "Cancel edit" : "Edit profile"}
        >
          <PencilIcon className="w-5 h-5 text-blue-600" />
        </button>
      </div>
      
      <div className="relative mb-6">
        <img
          src={imageUrl || "https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=800"}
          alt={username}
          className="w-32 h-32 md:w-48 md:h-48 rounded-full object-cover border-4 border-white shadow-lg"
        />
      </div>
      
      <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">
        {username}
      </h1>
      <p className="text-lg text-gray-600 mb-6">
        {role}
      </p>
      
      <button
        onClick={onEdit}
        className="hidden md:block px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors shadow-md"
      >
        {isEditing ? "Cancel Edit" : "Edit Profile"}
      </button>
    </div>
  );
}