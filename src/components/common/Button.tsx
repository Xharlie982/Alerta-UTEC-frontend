import { ButtonHTMLAttributes, ReactNode, useState } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'danger';
  children: ReactNode;
}

export function Button({
  variant = 'primary',
  children,
  className = '',
  ...props
}: ButtonProps) {
  const baseClasses = 'px-4 py-2 rounded-lg font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed';
  
  const variantClasses = {
    primary: 'text-white',
    secondary: 'text-white',
    danger: 'bg-red-600 hover:bg-red-700 text-white',
  };
  
  const variantStyles = {
    primary: { backgroundColor: '#4a5a40' },
    secondary: { backgroundColor: '#7d9670' },
    danger: {},
  };
  
  const hoverStyles = {
    primary: { backgroundColor: '#5a6a50' },
    secondary: { backgroundColor: '#8da680' },
    danger: {},
  };

  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <button
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
      style={isHovered ? hoverStyles[variant] : variantStyles[variant]}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      {...props}
    >
      {children}
    </button>
  );
}

