import React, { useState } from 'react';
import { 
  User, Bell, MessageSquare, Users, Lightbulb, 
  PenSquare, Settings, ChevronLeft, ChevronRight 
} from 'lucide-react';

const menuItems = [
  { icon: User, label: 'Profile' },
  { icon: Bell, label: 'Notifications' },
  { icon: MessageSquare, label: 'Messages' },
  { icon: Users, label: 'Community' },
  { icon: Lightbulb, label: 'InnoMate' },
  { icon: PenSquare, label: 'Post' },
  { icon: Settings, label: 'Settings' },
];

export default function Sidebar() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [activeItem, setActiveItem] = useState('Profile');

  return (
    <div 
      className={`bg-white h-screen shadow-lg transition-all duration-300 ${
        isCollapsed ? 'w-16' : 'w-64'
      } fixed left-0 top-0`}
    >
      <button
        onClick={() => setIsCollapsed(!isCollapsed)}
        className="absolute -right-3 top-8 bg-white rounded-full p-1 shadow-md"
      >
        {isCollapsed ? 
          <ChevronRight className="w-4 h-4" /> : 
          <ChevronLeft className="w-4 h-4" />
        }
      </button>

      <div className="flex flex-col gap-2 p-4">
        {menuItems.map(({ icon: Icon, label }) => (
          <button
            key={label}
            onClick={() => setActiveItem(label)}
            className={`flex items-center gap-4 p-2 rounded-lg transition-colors
              ${activeItem === label 
                ? 'bg-blue-100 text-blue-600' 
                : 'hover:bg-gray-100'
              }`}
          >
            <Icon className="w-5 h-5" />
            {!isCollapsed && (
              <span className="text-sm font-medium">{label}</span>
            )}
          </button>
        ))}
      </div>
    </div>
  );
}