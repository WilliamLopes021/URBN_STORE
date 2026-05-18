export const Span = ({ children }: { children: React.ReactNode }) => {
  return (
    <span className="flex items-center gap-2 text-light-gray text-sm tracking-[0.2em] uppercase font-mono">
      {children}
    </span>
  );
};
