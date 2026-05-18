export const CheckBox = (props: React.ComponentProps<"input">) => {
  return (
    <input
      {...props}
      type="checkbox"
      className={`peer appearance-none size-4 border border-accent-pink bg-transparent checked:bg-accent-pink transition-colors duration-200 cursor-pointer`}
    />
  );
};
