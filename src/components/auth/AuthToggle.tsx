
import React from 'react';

interface AuthToggleProps {
  isSignUp: boolean;
  onToggleMode: () => void;
}

const AuthToggle: React.FC<AuthToggleProps> = ({ isSignUp, onToggleMode }) => {
  return (
    <div className="mt-6 text-center">
      <button
        type="button"
        onClick={onToggleMode}
        className="text-blue-600 hover:text-blue-500 text-sm"
      >
        {isSignUp 
          ? 'Already have an account? Sign in' 
          : "Don't have an account? Sign up"
        }
      </button>
    </div>
  );
};

export default AuthToggle;
