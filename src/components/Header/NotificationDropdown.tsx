
import React, { useState } from 'react';
import { Bell, X, CheckCircle, AlertCircle, Info } from 'lucide-react';
import { useNotifications } from '@/hooks/useNotifications';
import { useClickOutside } from '@/hooks/useClickOutside';

const NotificationDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { notifications, loading, markAsRead } = useNotifications();
  const dropdownRef = useClickOutside(() => setIsOpen(false), isOpen);

  const unreadCount = notifications.filter(n => !n.is_read).length;

  const handleMarkAsRead = (id: string) => {
    markAsRead(id);
  };

  const getIcon = (type: string) => {
    switch (type) {
      case 'success':
        return <CheckCircle className="h-4 w-4 text-green-500" />;
      case 'warning':
        return <AlertCircle className="h-4 w-4 text-yellow-500" />;
      default:
        return <Info className="h-4 w-4 text-blue-500" />;
    }
  };

  const formatTimestamp = (timestamp: string) => {
    const date = new Date(timestamp);
    const now = new Date();
    const diffInMinutes = Math.floor((now.getTime() - date.getTime()) / (1000 * 60));
    
    if (diffInMinutes < 60) {
      return diffInMinutes === 0 ? 'Just now' : `${diffInMinutes} min ago`;
    } else if (diffInMinutes < 1440) {
      const hours = Math.floor(diffInMinutes / 60);
      return `${hours} hour${hours > 1 ? 's' : ''} ago`;
    } else {
      const days = Math.floor(diffInMinutes / 1440);
      return `${days} day${days > 1 ? 's' : ''} ago`;
    }
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative p-2 hover:bg-slate-100 rounded-full transition-all duration-200 text-slate-600 group"
        aria-label="Notifications"
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        <Bell className="h-5 w-5 group-hover:scale-110 transition-transform duration-200" />
        {unreadCount > 0 && (
          <span className="absolute top-1 right-1 bg-red-600 text-white text-[9px] font-bold rounded-full h-4 w-4 flex items-center justify-center shadow-sm border-2 border-white">
            {unreadCount > 9 ? '9+' : unreadCount}
          </span>
        )}
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-3 w-72 sm:w-80 max-w-[85vw] bg-white border border-slate-200 rounded-lg shadow-xl z-[70] overflow-hidden animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="p-4 border-b border-slate-100 flex justify-between items-center bg-slate-50">
            <h3 className="text-sm font-bold text-slate-900">Notifications</h3>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1 hover:bg-slate-200 rounded text-slate-400 hover:text-slate-600 transition-all duration-200"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
          
          <div className="max-h-[350px] overflow-y-auto">
            {loading ? (
              <div className="p-6 text-center text-slate-500 flex flex-col items-center">
                <div className="w-6 h-6 border-2 border-blue-600/30 border-t-blue-600 rounded-full animate-spin mb-2"></div>
                <p className="text-[13px]">Loading notifications...</p>
              </div>
            ) : notifications.length === 0 ? (
              <div className="p-8 text-center">
                <div className="bg-slate-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Bell className="h-6 w-6 text-slate-400" />
                </div>
                <p className="text-slate-900 text-sm font-bold">No new notifications</p>
                <p className="text-[12px] text-slate-500 mt-1">We'll notify you when something happens</p>
              </div>
            ) : (
              notifications.slice(0, 10).map(notification => (
                <div
                  key={notification.id}
                  className={`p-4 border-b border-slate-50 hover:bg-slate-50 cursor-pointer transition-all duration-200 group ${
                    !notification.is_read ? 'bg-blue-50/30 border-l-4 border-l-blue-600' : ''
                  }`}
                  onClick={() => handleMarkAsRead(notification.id)}
                >
                  <div className="flex items-start space-x-3">
                    <div className="mt-0.5">
                      {getIcon(notification.type)}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex justify-between items-start mb-0.5">
                        <p className={`text-[13px] font-bold ${
                          !notification.is_read ? 'text-slate-900' : 'text-slate-700'
                        } truncate group-hover:text-blue-700 transition-colors`}>
                          {notification.title}
                        </p>
                        <span className="text-[10px] font-medium text-slate-400 flex-shrink-0 ml-2">
                          {formatTimestamp(notification.created_at)}
                        </span>
                      </div>
                      <p className="text-[12px] text-slate-500 line-clamp-2 leading-relaxed font-medium">
                        {notification.message}
                      </p>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
          
          {notifications.length > 0 && (
            <div className="p-3 border-t border-slate-100 bg-slate-50">
              <button className="w-full py-2 text-[12px] text-blue-700 hover:text-blue-800 font-bold transition-all duration-200 hover:bg-white rounded-lg border border-transparent hover:border-slate-200">
                View All Notifications
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default NotificationDropdown;
