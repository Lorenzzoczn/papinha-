import clsx from 'clsx';
import React from 'react';

type ButtonVariant = 'primary' | 'ghost' | 'danger';

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
  loading?: boolean;
};

export const Button = ({ children, className, variant = 'primary', loading = false, disabled, ...props }: ButtonProps) => {
  const isDisabled = disabled || loading;

  return (
    <button
      className={clsx(
        'lp-button',
        variant,
        isDisabled && 'disabled',
        loading && 'loading',
        className,
      )}
      disabled={isDisabled}
      {...props}
    >
      {loading ? <span className="loader" /> : children}
    </button>
  );
};

export default Button;

