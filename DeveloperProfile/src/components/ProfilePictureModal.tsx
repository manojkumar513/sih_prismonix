import React, { useState, useRef } from 'react';
import { Modal } from './Modal';
import { Upload } from 'lucide-react';

interface ProfilePictureModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (image: string) => void;
  currentImage: string;
}

export function ProfilePictureModal({ isOpen, onClose, onSave, currentImage }: ProfilePictureModalProps) {
  const [previewImage, setPreviewImage] = useState(currentImage);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSave = () => {
    onSave(previewImage);
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Update Profile Picture">
      <div className="space-y-4">
        <div className="flex justify-center">
          <div className="w-32 h-32 rounded-full overflow-hidden border-2 border-gray-200">
            <img
              src={previewImage || "https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=400&auto=format&fit=crop&q=80"}
              alt="Profile Preview"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <input
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          className="hidden"
          ref={fileInputRef}
        />

        <button
          onClick={() => fileInputRef.current?.click()}
          className="w-full p-3 border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center gap-2 hover:border-blue-500 hover:text-blue-500 transition-colors"
        >
          <Upload size={20} />
          Upload New Picture
        </button>

        <div className="flex justify-end gap-2 mt-4">
          <button
            onClick={onClose}
            className="px-4 py-2 text-gray-600 hover:text-gray-800 transition-colors"
          >
            Cancel
          </button>
          <button
            onClick={handleSave}
            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
          >
            Save Changes
          </button>
        </div>
      </div>
    </Modal>
  );
}