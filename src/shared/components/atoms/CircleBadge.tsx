export const CircleBadge = ({
  children,
  textColor = "text-primary",
  ...props
}: {
  children: React.ReactNode;
  textColor?: "text-primary" | "dark-gray";
} & React.ButtonHTMLAttributes<HTMLButtonElement>) => {
  const textColorClassName = `text-${textColor}`;
  return (
    <button
      {...props}
      className={`p-2 rounded-full border border-dark-gray cursor-pointer hover:scale-110 transition-all duration-300 ${textColorClassName}`}
    >
      {children}
    </button>
  );
};
