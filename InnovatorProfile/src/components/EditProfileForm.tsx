import React, { useState } from 'react';
import { Upload, X } from 'lucide-react';

type EditProfileFormProps = {
  initialUsername: string;
  initialRole: string;
  initialImageUrl: string;
  onSave: (data: { username: string; role: string; imageUrl: string }) => void;
  onCancel: () => void;
};

export function EditProfileForm({
  initialUsername,
  initialRole,
  initialImageUrl,
  onSave,
  onCancel,
}: EditProfileFormProps) {
  const [username, setUsername] = useState(initialUsername);
  const [role, setRole] = useState(initialRole);
  const [imageUrl, setImageUrl] = useState(initialImageUrl);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave({ username, role, imageUrl });
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-md mx-auto p-6 space-y-6">
      <div className="space-y-4">
        <div className="flex flex-col items-center">
          <img
            src={imageUrl || "https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=800"}
            alt="Profile preview"
            className="w-32 h-32 rounded-full object-cover mb-4"
          />
          <div className="flex gap-2">
            <button
              type="button"
              onClick={() => setImageUrl("https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=800")}
              className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors"
            >
              <Upload className="w-4 h-4" />
              Upload New Picture
            </button>
          </div>
        </div>

        <div>
          <label htmlFor="username" className="block text-sm font-medium text-gray-700 mb-1">
            Username
          </label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Enter your username"
            required
          />
        </div>

        <div>
          <label htmlFor="role" className="block text-sm font-medium text-gray-700 mb-1">
            Role
          </label>
          <input
            type="text"
            id="role"
            value={role}
            onChange={(e) => setRole(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Describe your role (e.g., Innovator, CEO, Designer)"
            required
          />
        </div>
      </div>

      <div className="flex gap-4 justify-end">
        <button
          type="button"
          onClick={onCancel}
          className="px-6 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          Save Changes
        </button>
      </div>
    </form>
  );
}