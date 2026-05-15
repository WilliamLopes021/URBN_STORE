export const Card = ({
  children,
  color,
  ...props
}: {
  children: React.ReactNode;
  color?: string;
} & React.ComponentProps<"div">) => {
  const cardColor =
    color === "black"
      ? "bg-surface"
      : "bg-linear-to-b from-card-bg to-transparent";
  return (
    <div
      className={`flex items-center justify-center flex-col ${cardColor} border border-dark-gray rounded-lg relative cursor-pointer hover:scale-102 transition-all duration-500 ease-in-out`}
      {...props}
    >
      {children}
    </div>
  );
};
