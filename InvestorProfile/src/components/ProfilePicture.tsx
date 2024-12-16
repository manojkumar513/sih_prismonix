import React, { useState, useRef } from 'react';
import { Camera, Upload, Link as LinkIcon } from 'lucide-react';
import { EditModal } from './EditModal';
import { fileToDataUrl } from '../utils/imageUtils';

interface ProfilePictureProps {
  imageUrl: string;
  onUpdate: (url: string) => void;
}

export function ProfilePicture({ imageUrl, onUpdate }: ProfilePictureProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [tempUrl, setTempUrl] = useState(imageUrl);
  const [uploadMethod, setUploadMethod] = useState<'file' | 'url'>('file');
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleSave = () => {
    onUpdate(tempUrl);
    setIsEditing(false);
  };

  const handleClose = () => {
    setTempUrl(imageUrl);
    setIsEditing(false);
    setUploadMethod('file');
  };

  const handleFileChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      try {
        const dataUrl = await fileToDataUrl(file);
        setTempUrl(dataUrl);
      } catch (error) {
        console.error('Error reading file:', error);
      }
    }
  };

  return (
    <div className="relative group">
      <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-lg mx-auto">
        <img
          src={imageUrl || 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=400'}
          alt="Profile"
          className="w-full h-full object-cover"
        />
      </div>
      <button
        onClick={() => setIsEditing(true)}
        className="absolute bottom-0 right-0 bg-blue-600 p-2 rounded-full text-white opacity-0 group-hover:opacity-100 transition-opacity"
      >
        <Camera size={20} />
      </button>

      <EditModal
        isOpen={isEditing}
        onClose={handleClose}
        onSave={handleSave}
        title="Update Profile Picture"
      >
        <div className="space-y-4">
          <div className="flex gap-2 border-b">
            <button
              onClick={() => setUploadMethod('file')}
              className={`px-4 py-2 ${
                uploadMethod === 'file'
                  ? 'border-b-2 border-blue-600 text-blue-600'
                  : 'text-gray-500'
              }`}
            >
              <div className="flex items-center gap-2">
                <Upload size={16} />
                <span>Upload File</span>
              </div>
            </button>
            <button
              onClick={() => setUploadMethod('url')}
              className={`px-4 py-2 ${
                uploadMethod === 'url'
                  ? 'border-b-2 border-blue-600 text-blue-600'
                  : 'text-gray-500'
              }`}
            >
              <div className="flex items-center gap-2">
                <LinkIcon size={16} />
                <span>Image URL</span>
              </div>
            </button>
          </div>

          {uploadMethod === 'file' ? (
            <div className="space-y-2">
              <input
                type="file"
                ref={fileInputRef}
                onChange={handleFileChange}
                accept="image/*"
                className="hidden"
              />
              <button
                onClick={() => fileInputRef.current?.click()}
                className="w-full px-4 py-8 border-2 border-dashed rounded-lg text-gray-500 hover:text-blue-600 hover:border-blue-600 transition-colors"
              >
                <div className="flex flex-col items-center gap-2">
                  <Upload size={24} />
                  <span>Click to upload image</span>
                  <span className="text-sm text-gray-400">
                    JPG, PNG, GIF up to 5MB
                  </span>
                </div>
              </button>
            </div>
          ) : (
            <input
              type="url"
              value={tempUrl}
              onChange={(e) => setTempUrl(e.target.value)}
              placeholder="Enter image URL"
              className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          )}

          {tempUrl && (
            <div className="mt-4">
              <p className="text-sm font-medium text-gray-700 mb-2">Preview:</p>
              <div className="w-20 h-20 rounded-full overflow-hidden border">
                <img
                  src={tempUrl}
                  alt="Preview"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          )}
        </div>
      </EditModal>
    </div>
  );
}