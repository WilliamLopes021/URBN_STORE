type InputProps = {
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  blueGlow?: boolean;
} & React.ComponentProps<"input">;

export const Input = ({ leftIcon, rightIcon, blueGlow = false, ...props }: InputProps) => {
  return (
    <div className={`flex items-center border bg-dark-gray transition-colors duration-200 ${blueGlow ? 'focus-within:border-accent-blue' : 'focus-within:border-accent-pink border-border' }`}>
      {leftIcon && <div className="p-4">{leftIcon}</div>}
      <input
        {...props}
        className="flex-1 text-text-primary placeholder:text-light-gray/80
      text-sm font-medium px-4 py-3 outline-none border-none
      disabled:opacity-50
      rounded-none"
      />
      {rightIcon && <div className="p-4">{rightIcon}</div>}
    </div>
  );
};
