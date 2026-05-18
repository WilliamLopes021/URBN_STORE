interface ButtonProps extends React.ComponentProps<"button"> {
  children: React.ReactNode;
  color?: "primary" | "secondary";
}

export const Button = ({
  children,
  color = "primary",
  ...props
}: ButtonProps) => {
  const buttonColor =
    color === `primary`
      ? `bg-button-primary border border-button-primary hover:bg-button-primary-hover hover:border-button-primary-hover`
      : `bg-button-secondary border border-button-secondary-border hover:bg-button-secondary-hover`;
  return (
    <button
      {...props}
      className={`${buttonColor} text-text-primary whitespace-nowrap tracking-widest uppercase px-5 py-3 flex items-center gap-4 font-semibold cursor-pointer transition-colors duration-200 ${props.className}`}
    >
      {children}
    </button>
  );
};
