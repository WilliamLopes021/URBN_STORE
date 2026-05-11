import React, { type InputHTMLAttributes, useState } from "react";
import { Eye, EyeOff } from "lucide-react";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  leftIcon?: React.ReactNode;
  labelText?: string;
  rightIcon?: React.ReactNode;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ leftIcon, rightIcon, type, ...props }, ref) => {
    const [showPassword, setShowPassword] = useState(false);
    const isPassword = type === "password";

    const handleTogglePassword = () => {
      setShowPassword((prev) => !prev);
    };

    const inputType = isPassword ? (showPassword ? "text" : "password") : type;

    return (
      <div className="relative flex items-center w-full rounded-xl border border-border-strong bg-transparent focus-within:border-accent-blue focus-within:shadow-glow-blue transition-all duration-300 overflow-hidden">
        {leftIcon && (
          <div className="pl-4 pr-2 flex items-center justify-center text-text-muted">
            {leftIcon}
          </div>
        )}

        <input
          ref={ref}
          type={inputType}
          className={`flex-1 bg-transparent border-none outline-none text-text-primary placeholder:text-text-muted py-4 ${leftIcon ? "pl-2" : "pl-4"} ${isPassword || rightIcon ? "pr-2" : "pr-4"} font-sans text-base`}
          {...props}
        />

        {(isPassword || rightIcon) && (
          <div className="pr-4 pl-2 flex items-center justify-center text-text-muted">
            {isPassword ? (
              <button
                type="button"
                onClick={handleTogglePassword}
                className="hover:text-text-primary transition-colors focus:outline-none cursor-pointer flex items-center justify-center"
                aria-label={showPassword ? "Hide password" : "Show password"}
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            ) : (
              rightIcon
            )}
          </div>
        )}
      </div>
    );
  },
);

Input.displayName = "Input";
