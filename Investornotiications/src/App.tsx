import React from 'react';
import { NotificationsHeader } from './components/notifications/NotificationsHeader';
import { NotificationItem } from './components/notifications/NotificationItem';
import { useNotifications } from './hooks/useNotifications';

function App() {
  const { notifications, unreadCount, markAsRead, markAllAsRead, setFilter } = useNotifications();

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-2xl mx-auto bg-white shadow-lg">
        <NotificationsHeader
          unreadCount={unreadCount}
          onMarkAllRead={markAllAsRead}
          onFilterChange={setFilter}
        />
        
        <div className="divide-y divide-gray-200">
          {notifications.length > 0 ? (
            notifications.map(notification => (
              <NotificationItem
                key={notification.id}
                notification={notification}
                onMarkAsRead={markAsRead}
              />
            ))
          ) : (
            <div className="p-8 text-center text-gray-500">
              No notifications to display
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;