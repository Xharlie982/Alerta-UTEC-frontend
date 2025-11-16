import { InputHTMLAttributes } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

export function Input({ label, error, className = '', ...props }: InputProps) {
  return (
    <div className="w-full">
      {label && (
        <label className="block text-sm font-medium mb-1" style={{ color: '#333333' }}>
          {label}
        </label>
      )}
      <input
        className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 ${className}`}
        style={{
          borderColor: error ? '#dc2626' : '#d1d5db',
          backgroundColor: '#ffffff',
          color: '#333333',
        }}
        {...props}
      />
      {error && <p className="mt-1 text-sm" style={{ color: '#dc2626' }}>{error}</p>}
    </div>
  );
}

