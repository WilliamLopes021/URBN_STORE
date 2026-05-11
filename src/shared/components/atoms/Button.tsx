export const Button = ({
  children,
  color,
}: {
  children: React.ReactNode;
  color: string;
}) => {
  const buttonColor =
    color === `primary`
      ? `bg-button-primary border border-button-primary hover:bg-button-primary-hover hover:border-button-primary-hover transition-colors duration-200`
      : `bg-button-secondary border border-button-secondary-border hover:bg-button-secondary-hover transition-colors duration-200`;
  return (
    <button
      className={`${buttonColor} text-text-primary px-5 py-3 flex items-center gap-4 font-semibold cursor-pointer`}
    >
      {children}
    </button>
  );
};
