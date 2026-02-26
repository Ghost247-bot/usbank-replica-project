import React, { Component, ErrorInfo, ReactNode } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { AlertTriangle, RefreshCw, Home } from 'lucide-react';
import { logger } from '@/lib/logger';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
  onError?: (error: Error, errorInfo: ErrorInfo) => void;
}

interface State {
  hasError: boolean;
  error: Error | null;
  errorInfo: ErrorInfo | null;
  errorId: string;
}

class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
      errorInfo: null,
      errorId: '',
    };
  }

  static getDerivedStateFromError(error: Error): Partial<State> {
    return {
      hasError: true,
      error,
      errorId: `error-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
    };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    this.setState({
      error,
      errorInfo,
    });

    // Log the error
    logger.error('React Error Boundary caught an error', 'error-boundary', {
      errorId: this.state.errorId,
      error: error.message,
      stack: error.stack,
      componentStack: errorInfo.componentStack,
    });

    // Call custom error handler
    if (this.props.onError) {
      this.props.onError(error, errorInfo);
    }

    // In production, you might want to send this to an error reporting service
    if (process.env.NODE_ENV === 'production') {
      // Send to error reporting service (Sentry, etc.)
      console.error('Error reported to service:', {
        errorId: this.state.errorId,
        error: error.message,
        stack: error.stack,
      });
    }
  }

  handleRetry = () => {
    this.setState({
      hasError: false,
      error: null,
      errorInfo: null,
      errorId: '',
    });
  };

  handleGoHome = () => {
    window.location.href = '/';
  };

  render() {
    if (this.state.hasError) {
      // Custom fallback UI
      if (this.props.fallback) {
        return this.props.fallback;
      }

      // Default error UI
      return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
          <Card className="w-full max-w-md">
            <CardHeader className="text-center">
              <div className="mx-auto w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mb-4">
                <AlertTriangle className="w-6 h-6 text-red-600" />
              </div>
              <CardTitle className="text-red-600">Something went wrong</CardTitle>
              <CardDescription>
                We're sorry, but something unexpected happened. Our team has been notified.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {process.env.NODE_ENV === 'development' && this.state.error && (
                <div className="p-3 bg-gray-100 rounded-md">
                  <p className="text-sm font-mono text-gray-700 mb-2">
                    Error ID: {this.state.errorId}
                  </p>
                  <p className="text-sm font-mono text-red-600 mb-2">
                    {this.state.error.message}
                  </p>
                  <details className="text-xs text-gray-600">
                    <summary className="cursor-pointer">Stack trace</summary>
                    <pre className="mt-2 whitespace-pre-wrap">
                      {this.state.error.stack}
                    </pre>
                  </details>
                </div>
              )}
              
              <div className="flex flex-col gap-2">
                <Button onClick={this.handleRetry} className="w-full">
                  <RefreshCw className="w-4 h-4 mr-2" />
                  Try Again
                </Button>
                <Button variant="outline" onClick={this.handleGoHome} className="w-full">
                  <Home className="w-4 h-4 mr-2" />
                  Go Home
                </Button>
              </div>
              
              <div className="text-center text-xs text-gray-500">
                If this problem persists, please contact support.
              </div>
            </CardContent>
          </Card>
        </div>
      );
    }

    return this.props.children;
  }
}

// Functional wrapper for easier usage
export const ErrorBoundaryWrapper: React.FC<{
  children: ReactNode;
  fallback?: ReactNode;
  onError?: (error: Error, errorInfo: ErrorInfo) => void;
}> = ({ children, fallback, onError }) => {
  return (
    <ErrorBoundary fallback={fallback} onError={onError}>
      {children}
    </ErrorBoundary>
  );
};

// Specialized error boundaries for different contexts
export const AuthErrorBoundary: React.FC<{ children: ReactNode }> = ({ children }) => {
  const authFallback = (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <div className="mx-auto w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mb-4">
            <AlertTriangle className="w-6 h-6 text-red-600" />
          </div>
          <CardTitle className="text-red-600">Authentication Error</CardTitle>
          <CardDescription>
            There was a problem with the authentication process. Please try signing in again.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <Button onClick={() => window.location.href = '/auth'} className="w-full">
            Back to Sign In
          </Button>
        </CardContent>
      </Card>
    </div>
  );

  return (
    <ErrorBoundary fallback={authFallback}>
      {children}
    </ErrorBoundary>
  );
};

export const DashboardErrorBoundary: React.FC<{ children: ReactNode }> = ({ children }) => {
  const dashboardFallback = (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <div className="mx-auto w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mb-4">
            <AlertTriangle className="w-6 h-6 text-red-600" />
          </div>
          <CardTitle className="text-red-600">Dashboard Error</CardTitle>
          <CardDescription>
            We couldn't load your dashboard. Please refresh the page or try again later.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <Button onClick={() => window.location.reload()} className="w-full">
            <RefreshCw className="w-4 h-4 mr-2" />
            Refresh Page
          </Button>
          <Button variant="outline" onClick={() => window.location.href = '/'} className="w-full">
            <Home className="w-4 h-4 mr-2" />
            Go Home
          </Button>
        </CardContent>
      </Card>
    </div>
  );

  return (
    <ErrorBoundary fallback={dashboardFallback}>
      {children}
    </ErrorBoundary>
  );
};

export const FormErrorBoundary: React.FC<{ children: ReactNode }> = ({ children }) => {
  const formFallback = (
    <div className="p-4 border border-red-200 bg-red-50 rounded-md">
      <div className="flex items-center space-x-2 text-red-600">
        <AlertTriangle className="w-4 h-4" />
        <span className="text-sm font-medium">Form Error</span>
      </div>
      <p className="text-sm text-red-600 mt-1">
        There was an error with this form. Please refresh and try again.
      </p>
      <Button
        size="sm"
        variant="outline"
        onClick={() => window.location.reload()}
        className="mt-2"
      >
        Refresh
      </Button>
    </div>
  );

  return (
    <ErrorBoundary fallback={formFallback}>
      {children}
    </ErrorBoundary>
  );
};

// Hook for error boundary context
export const useErrorBoundary = () => {
  const [error, setError] = React.useState<Error | null>(null);

  const resetError = React.useCallback(() => {
    setError(null);
  }, []);

  const captureError = React.useCallback((error: Error) => {
    setError(error);
    logger.error('Error captured by useErrorBoundary hook', 'error-boundary', {
      error: error.message,
      stack: error.stack,
    });
  }, []);

  return {
    error,
    setError,
    resetError,
    captureError,
  };
};

export default ErrorBoundary;
export { ErrorBoundary };
