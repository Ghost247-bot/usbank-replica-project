
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
        className="relative p-2.5 hover:bg-white/5 rounded-xl transition-all duration-200 text-slate-300 border border-white/5 group"
        aria-label="Notifications"
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        <Bell className="h-5 w-5 group-hover:scale-110 transition-transform duration-200" />
        {unreadCount > 0 && (
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] font-bold rounded-full h-5 w-5 flex items-center justify-center shadow-lg border-2 border-slate-900 animate-pulse">
            {unreadCount > 9 ? '9+' : unreadCount}
          </span>
        )}
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-3 w-72 sm:w-80 max-w-[85vw] bg-slate-800/95 backdrop-blur-xl border border-slate-600/50 rounded-2xl shadow-2xl z-[70] overflow-hidden animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="p-3.5 sm:p-4 border-b border-slate-600/30 flex justify-between items-center bg-gradient-to-r from-slate-800 to-slate-900">
            <h3 className="text-sm font-bold text-slate-100">Notifications</h3>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1 hover:bg-white/5 rounded-lg text-slate-400 hover:text-slate-200 transition-all duration-200"
            >
              <X className="h-3.5 w-3.5" />
            </button>
          </div>
          
          <div className="max-h-[350px] overflow-y-auto custom-scrollbar">
            {loading ? (
              <div className="p-6 text-center text-slate-400 flex flex-col items-center">
                <div className="w-6 h-6 border-2 border-blue-500/30 border-t-blue-500 rounded-full animate-spin mb-2.5"></div>
                <p className="text-[13px]">Loading notifications...</p>
              </div>
            ) : notifications.length === 0 ? (
              <div className="p-8 text-center">
                <div className="bg-slate-700/30 w-10 h-10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Bell className="h-5 w-5 text-slate-500" />
                </div>
                <p className="text-slate-400 text-sm font-medium">No new notifications</p>
                <p className="text-[11px] text-slate-500 mt-1">We'll notify you when something happens</p>
              </div>
            ) : (
              notifications.slice(0, 10).map(notification => (
                <div
                  key={notification.id}
                  className={`p-3.5 sm:p-4 border-b border-slate-600/20 hover:bg-slate-700/50 cursor-pointer transition-all duration-200 group ${
                    !notification.is_read ? 'bg-blue-500/5 border-l-2 border-l-blue-500' : ''
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
                          !notification.is_read ? 'text-slate-100' : 'text-slate-300'
                        } truncate group-hover:text-white transition-colors`}>
                          {notification.title}
                        </p>
                        <span className="text-[9px] font-medium text-slate-500 flex-shrink-0 ml-2">
                          {formatTimestamp(notification.created_at)}
                        </span>
                      </div>
                      <p className="text-[12px] text-slate-400 line-clamp-2 leading-relaxed group-hover:text-slate-300 transition-colors">
                        {notification.message}
                      </p>
                    </div>
                    {!notification.is_read && (
                      <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-1.5 shadow-[0_0_8px_rgba(59,130,246,0.5)]"></div>
                    )}
                  </div>
                </div>
              ))
            )}
          </div>
          
          {notifications.length > 0 && (
            <div className="p-3 border-t border-slate-600/30 bg-slate-900/50">
              <button className="w-full py-1.5 text-[12px] text-blue-400 hover:text-blue-300 font-bold transition-all duration-200 hover:bg-blue-500/5 rounded-lg">
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
