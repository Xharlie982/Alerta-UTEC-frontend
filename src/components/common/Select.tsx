import { SelectHTMLAttributes } from 'react';

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  error?: string;
  options: { value: string; label: string }[];
}

export function Select({
  label,
  error,
  options,
  className = '',
  ...props
}: SelectProps) {
  return (
    <div className="w-full">
      {label && (
        <label className="block text-sm font-medium mb-1" style={{ color: '#333333' }}>
          {label}
        </label>
      )}
      <select
        className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 ${className}`}
        style={{
          borderColor: error ? '#dc2626' : '#d1d5db',
          backgroundColor: '#ffffff',
          color: '#333333',
        }}
        {...props}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {error && <p className="mt-1 text-sm" style={{ color: '#dc2626' }}>{error}</p>}
    </div>
  );
}

