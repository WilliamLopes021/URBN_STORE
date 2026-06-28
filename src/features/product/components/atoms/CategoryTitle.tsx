export const CategoryTitle = ({ children }: { children: React.ReactNode }) => {
  return (
    <h2 className="text-text-primary text-2xl uppercase tracking-wider font-bold">
      {children}
    </h2>
  );
};