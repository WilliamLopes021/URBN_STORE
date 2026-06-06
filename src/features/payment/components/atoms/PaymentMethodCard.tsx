export const PaymentMethodCard = ({
  icon,
  label,
  selected,
}: {
  icon: React.ReactNode;
  label: string;
  selected: boolean;
}) => {
  const color = selected
    ? "text-accent-blue border-accent-blue"
    : "text-text-primary border-border";

  return (
    <div
      className={`flex flex-col w-44 h-28 gap-1 justify-center items-center bg-surface p-4 rounded-md border cursor-pointer transition-all text-center ${color}`}
    >
      {icon}
      <p className="uppercase text-text-primary text-xs font-bold tracking-wider">
        {label}
      </p>
    </div>
  );
};
