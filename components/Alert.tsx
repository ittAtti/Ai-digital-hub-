import React from 'react';
import { AlertCircle, CheckCircle, X, Info } from 'lucide-react';

interface AlertProps {
  type: 'error' | 'success' | 'info';
  message: string;
  onClose?: () => void;
}

const Alert: React.FC<AlertProps> = ({ type, message, onClose }) => {
  const styles = {
    error: {
      container: 'bg-red-900/20 border-red-500/50 text-red-200',
      icon: <AlertCircle className="w-5 h-5 text-red-400" />
    },
    success: {
      container: 'bg-emerald-900/20 border-emerald-500/50 text-emerald-200',
      icon: <CheckCircle className="w-5 h-5 text-emerald-400" />
    },
    info: {
      container: 'bg-blue-900/20 border-blue-500/50 text-blue-200',
      icon: <Info className="w-5 h-5 text-blue-400" />
    }
  };

  const style = styles[type];

  return (
    <div className={`flex items-start p-4 mb-6 rounded-lg border ${style.container} animate-fadeIn shadow-sm`}>
      <div className="flex-shrink-0 mr-3 mt-0.5">
        {style.icon}
      </div>
      <div className="flex-1 text-sm font-medium leading-relaxed">
        {message}
      </div>
      {onClose && (
        <button 
          onClick={onClose} 
          className="ml-3 hover:opacity-70 transition p-1 rounded-full hover:bg-white/10"
          aria-label="Close alert"
        >
          <X className="w-4 h-4" />
        </button>
      )}
    </div>
  );
};

export default Alert;