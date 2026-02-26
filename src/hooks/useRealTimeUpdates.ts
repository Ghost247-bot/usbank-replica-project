import { useState, useEffect, useCallback, useRef } from 'react';
import React from 'react';
import { useQueryClient } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import { logger } from '@/lib/logger';

interface UseRealTimeUpdatesOptions<T> {
  table: string;
  filter?: string;
  onInsert?: (payload: T) => void;
  onUpdate?: (payload: T) => void;
  onDelete?: (payload: T) => void;
  onError?: (error: Error) => void;
  queryKey?: any[]; // Optional React Query key to invalidate or update
}

export const useRealTimeUpdates = <T>({
  table,
  filter,
  onInsert,
  onUpdate,
  onDelete,
  onError,
  queryKey,
}: UseRealTimeUpdatesOptions<T>) => {
  const [isConnected, setIsConnected] = useState(false);
  const [lastUpdate, setLastUpdate] = useState<Date | null>(null);
  const subscriptionRef = useRef<any>(null);
  const queryClient = useQueryClient();

  const handleRealtimeEvent = useCallback((payload: any) => {
    logger.info(`Realtime update received for ${table}`, 'realtime', payload);
    
    setLastUpdate(new Date());

    try {
      const { eventType, new: newRecord, old: oldRecord } = payload;

      // Update React Query cache if queryKey is provided
      if (queryKey) {
        // Simple invalidation is often safer than manual cache updates for complex lists
        queryClient.invalidateQueries({ queryKey });
        
        // Also update specific data if needed
        if (eventType === 'INSERT') {
          queryClient.setQueryData(queryKey, (oldData: any) => {
            if (!Array.isArray(oldData)) return oldData;
            return [newRecord, ...oldData];
          });
        } else if (eventType === 'UPDATE') {
          queryClient.setQueryData(queryKey, (oldData: any) => {
            if (!Array.isArray(oldData)) return oldData;
            return oldData.map((item: any) => 
              item.id === newRecord.id ? { ...item, ...newRecord } : item
            );
          });
        } else if (eventType === 'DELETE') {
          queryClient.setQueryData(queryKey, (oldData: any) => {
            if (!Array.isArray(oldData)) return oldData;
            return oldData.filter((item: any) => item.id !== oldRecord.id);
          });
        }
      }

      switch (eventType) {
        case 'INSERT': if (onInsert) onInsert(newRecord); break;
        case 'UPDATE': if (onUpdate) onUpdate(newRecord); break;
        case 'DELETE': if (onDelete) onDelete(oldRecord); break;
      }
    } catch (error) {
      logger.error('Error handling realtime update', 'realtime', error);
      if (onError) onError(error as Error);
    }
  }, [table, onInsert, onUpdate, onDelete, onError, queryKey, queryClient]);

  const connect = useCallback(() => {
    if (subscriptionRef.current) return;

    try {
      const channelName = `${table}_${filter || 'all'}_${Math.random().toString(36).substring(7)}`;
      
      const subscription = supabase
        .channel(channelName)
        .on(
          'postgres_changes' as any,
          {
            event: '*',
            schema: 'public',
            table: table,
            filter: filter,
          },
          handleRealtimeEvent
        )
        .subscribe((status) => {
          if (status === 'SUBSCRIBED') {
            setIsConnected(true);
            logger.info(`Realtime subscription connected for ${table}`, 'realtime');
          } else {
            setIsConnected(false);
          }
        });

      subscriptionRef.current = subscription;
    } catch (error) {
      logger.error('Error setting up realtime subscription', 'realtime', error);
      if (onError) onError(error as Error);
    }
  }, [table, filter, handleRealtimeEvent, onError]);

  const disconnect = useCallback(() => {
    if (subscriptionRef.current) {
      supabase.removeChannel(subscriptionRef.current);
      subscriptionRef.current = null;
      setIsConnected(false);
    }
  }, []);

  useEffect(() => {
    connect();
    return () => disconnect();
  }, [connect, disconnect]);

  return { isConnected, lastUpdate };
};

// User-specific updates
export const useTransactionUpdates = (userId: string) => {
  return useRealTimeUpdates({
    table: 'transactions',
    filter: userId ? `user_id=eq.${userId}` : undefined,
    queryKey: ['transactions', userId],
  });
};

export const useBalanceUpdates = (userId: string) => {
  return useRealTimeUpdates({
    table: 'accounts',
    filter: userId ? `user_id=eq.${userId}` : undefined,
    queryKey: ['accounts', userId],
  });
};

export const useNotificationUpdates = (userId: string) => {
  return useRealTimeUpdates({
    table: 'notifications',
    filter: userId ? `user_id=eq.${userId}` : undefined,
    queryKey: ['notifications', userId],
  });
};

// Admin updates
export const useAdminUpdates = () => {
  useRealTimeUpdates({ table: 'profiles', queryKey: ['admin', 'users'] });
  useRealTimeUpdates({ table: 'accounts', queryKey: ['admin', 'accounts'] });
  useRealTimeUpdates({ table: 'transactions', queryKey: ['admin', 'transactions'] });
  useRealTimeUpdates({ table: 'admin_actions', queryKey: ['admin', 'actions'] });
  
  // Also update stats when important tables change
  useRealTimeUpdates({ table: 'profiles', queryKey: ['admin-stats'] });
  useRealTimeUpdates({ table: 'accounts', queryKey: ['admin-stats'] });
  useRealTimeUpdates({ table: 'transactions', queryKey: ['admin-stats'] });

  return { isConnected: true };
};
