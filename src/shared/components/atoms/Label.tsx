
export const Label = ({
  children,
  ...props
}: {
  children: React.ReactNode;
} & React.ComponentProps<"label">) => {
  return (
    <label {...props} className="text-text-primary">
      {children}
    </label>
  );
};
