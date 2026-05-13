export const CircleBadge = ({
  children,
  textColor = "text-primary",
  ...props
}: {
  children: React.ReactNode;
  textColor?: "text-primary" | "dark-gray";
  props?: React.ButtonHTMLAttributes<HTMLButtonElement>;
}) => {
  const textColorClassName = `text-${textColor}`;
  return (
    <button
      {...props}
      className={`p-2 rounded-full border border-dark-gray ${textColorClassName}`}
    >
      {children}
    </button>
  );
};
