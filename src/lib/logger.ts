// Production-safe logging system

export enum LogLevel {
  DEBUG = 0,
  INFO = 1,
  WARN = 2,
  ERROR = 3,
  NONE = 4,
}

interface LogEntry {
  level: LogLevel;
  message: string;
  timestamp: Date;
  context?: string;
  data?: any;
}

class Logger {
  private static instance: Logger;
  private logs: LogEntry[] = [];
  private maxLogs = 1000; // Keep only last 1000 logs
  private currentLogLevel: LogLevel;
  private _env: any = null;

  public constructor() {
    // Don't access env in constructor to avoid circular dependency
    this.currentLogLevel = LogLevel.ERROR; // Default to ERROR
  }

  public getEnv() {
    if (!this._env) {
      try {
        // Lazy import to avoid circular dependency
        this._env = {
          isDevelopment: import.meta.env.DEV,
          isProduction: import.meta.env.PROD,
        };
      } catch (error) {
        // Fallback if import fails
        this._env = {
          isDevelopment: true,
          isProduction: false,
        };
      }
    }
    return this._env;
  }

  static getInstance(): Logger {
    if (!Logger.instance) {
      Logger.instance = new Logger();
      // Initialize log level after instance creation
      const env = Logger.instance.getEnv();
      Logger.instance.currentLogLevel = env.isDevelopment ? LogLevel.DEBUG : LogLevel.ERROR;
    }
    return Logger.instance;
  }

  private shouldLog(level: LogLevel): boolean {
    return level >= this.currentLogLevel;
  }

  public addLog(level: LogLevel, message: string, context?: string, data?: any): void {
    if (!this.shouldLog(level)) return;

    const logEntry: LogEntry = {
      level,
      message,
      timestamp: new Date(),
      context,
      data,
    };

    // Add to memory logs
    this.logs.push(logEntry);
    
    // Trim logs if too many
    if (this.logs.length > this.maxLogs) {
      this.logs = this.logs.slice(-this.maxLogs);
    }

    const env = this.getEnv();

    // Output to console in development
    if (env.isDevelopment) {
      this.outputToConsole(logEntry);
    }

    // In production, only output errors and send to logging service
    if (env.isProduction && level >= LogLevel.ERROR) {
      this.outputToConsole(logEntry);
      this.sendToLoggingService(logEntry);
    }
  }

  private outputToConsole(logEntry: LogEntry): void {
    const env = this.getEnv();
    const timestamp = logEntry.timestamp.toISOString();
    const context = logEntry.context ? `[${logEntry.context}]` : '';
    const message = `${timestamp} ${context} ${logEntry.message}`;

    switch (logEntry.level) {
      case LogLevel.DEBUG:
        console.debug(message, logEntry.data);
        break;
      case LogLevel.INFO:
        console.info(message, logEntry.data);
        break;
      case LogLevel.WARN:
        console.warn(message, logEntry.data);
        break;
      case LogLevel.ERROR:
        console.error(message, logEntry.data);
        break;
    }
  }

  private sendToLoggingService(logEntry: LogEntry): void {
    const env = this.getEnv();
    // Send to external logging service (Sentry, LogRocket, etc.)
    // This is a placeholder - implement based on your logging service
    if (env.monitoring?.errorReporting && env.monitoring?.sentryDsn) {
      // Example: Sentry.captureException(logEntry.data);
    }
  }

  // Public logging methods
  debug(message: string, context?: string, data?: any): void {
    this.addLog(LogLevel.DEBUG, message, context, data);
  }

  info(message: string, context?: string, data?: any): void {
    this.addLog(LogLevel.INFO, message, context, data);
  }

  warn(message: string, context?: string, data?: any): void {
    this.addLog(LogLevel.WARN, message, context, data);
  }

  error(message: string, context?: string, data?: any): void {
    this.addLog(LogLevel.ERROR, message, context, data);
  }

  // Get logs for debugging
  getLogs(level?: LogLevel, context?: string): LogEntry[] {
    let filteredLogs = this.logs;

    if (level !== undefined) {
      filteredLogs = filteredLogs.filter(log => log.level >= level);
    }

    if (context) {
      filteredLogs = filteredLogs.filter(log => log.context === context);
    }

    return filteredLogs;
  }

  // Clear logs
  clearLogs(): void {
    this.logs = [];
  }

  // Set log level dynamically
  setLogLevel(level: LogLevel): void {
    this.currentLogLevel = level;
  }

  // Get current log level
  getLogLevel(): LogLevel {
    return this.currentLogLevel;
  }
}

// Export singleton instance
export const logger = Logger.getInstance();

// Convenience exports
export const log = {
  debug: (message: string, context?: string, data?: any) => logger.debug(message, context, data),
  info: (message: string, context?: string, data?: any) => logger.info(message, context, data),
  warn: (message: string, context?: string, data?: any) => logger.warn(message, context, data),
  error: (message: string, context?: string, data?: any) => logger.error(message, context, data),
};

// Performance logging
export const performanceLog = {
  start: (operation: string) => {
    const startTime = performance.now();
    logger.debug(`Starting ${operation}`, 'performance');
    return startTime;
  },
  
  end: (operation: string, startTime: number) => {
    const endTime = performance.now();
    const duration = endTime - startTime;
    logger.info(`${operation} completed in ${duration.toFixed(2)}ms`, 'performance', { duration });
    return duration;
  },
  
  measure: async <T>(operation: string, fn: () => Promise<T>): Promise<T> => {
    const startTime = performanceLog.start(operation);
    try {
      const result = await fn();
      performanceLog.end(operation, startTime);
      return result;
    } catch (error) {
      performanceLog.end(operation, startTime);
      logger.error(`${operation} failed`, 'performance', error);
      throw error;
    }
  },
};

// Error logging with context
export const logError = (error: Error, context?: string, additionalData?: any) => {
  logger.error(error.message, context, {
    stack: error.stack,
    name: error.name,
    ...additionalData,
  });
};

// User action logging
export const logUserAction = (action: string, userId?: string, additionalData?: any) => {
  logger.info(`User action: ${action}`, 'user-action', {
    userId,
    timestamp: new Date().toISOString(),
    ...additionalData,
  });
};

// Security event logging
export const logSecurityEvent = (event: string, severity: 'low' | 'medium' | 'high', additionalData?: any) => {
  const level = severity === 'high' ? LogLevel.ERROR : severity === 'medium' ? LogLevel.WARN : LogLevel.INFO;
  logger.addLog(level, `Security event: ${event}`, 'security', {
    severity,
    timestamp: new Date().toISOString(),
    ...additionalData,
  });
};

// API logging
export const logApiCall = (method: string, url: string, duration: number, status: number, error?: any) => {
  const level = status >= 400 ? LogLevel.ERROR : LogLevel.INFO;
  logger.addLog(level, `${method} ${url} - ${status}`, 'api', {
    method,
    url,
    duration,
    status,
    error: error?.message,
  });
};

// Development-only logging
export const devLog = {
  debug: (message: string, data?: any) => {
    const loggerInstance = Logger.getInstance();
    const env = loggerInstance.getEnv();
    if (env.isDevelopment) {
      loggerInstance.debug(message, 'dev', data);
    }
  },
  
  info: (message: string, data?: any) => {
    const loggerInstance = Logger.getInstance();
    const env = loggerInstance.getEnv();
    if (env.isDevelopment) {
      loggerInstance.info(message, 'dev', data);
    }
  },
  
  warn: (message: string, data?: any) => {
    const loggerInstance = Logger.getInstance();
    const env = loggerInstance.getEnv();
    if (env.isDevelopment) {
      loggerInstance.warn(message, 'dev', data);
    }
  },
  
  error: (message: string, data?: any) => {
    const loggerInstance = Logger.getInstance();
    const env = loggerInstance.getEnv();
    if (env.isDevelopment) {
      loggerInstance.error(message, 'dev', data);
    }
  },
};

// Export for testing
export const createTestLogger = () => {
  return new Logger();
};
