export const CTAButton = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="absolute inset-0 bg-background/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
      <span className="flex items-center gap-2 bg-accent text-text-primary text-xs uppercase tracking-widest font-semibold px-5 py-2.5 rounded-sm translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
        {children}
      </span>
    </div>
  );
};
