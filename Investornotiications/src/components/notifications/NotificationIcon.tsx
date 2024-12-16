import React from 'react';
import { Heart, MessageCircle, AtSign, Mail, Users } from 'lucide-react';
import { NotificationType } from '../../types/notification';

interface NotificationIconProps {
  type: NotificationType;
  className?: string;
}

export function NotificationIcon({ type, className = '' }: NotificationIconProps) {
  const iconProps = { className: `w-5 h-5 ${className}` };
  
  switch (type) {
    case 'like':
      return <Heart {...iconProps} />;
    case 'comment':
      return <MessageCircle {...iconProps} />;
    case 'mention':
      return <AtSign {...iconProps} />;
    case 'message':
      return <Mail {...iconProps} />;
    case 'invite':
      return <Users {...iconProps} />;
  }
}