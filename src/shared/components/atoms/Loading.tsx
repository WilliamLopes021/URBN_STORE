interface LoadingProps {
  show: boolean;
  message?: string;
}

export const Loading = ({ show, message }: LoadingProps) => {
  if (!show) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm transition-all duration-300">
      <div className="flex flex-col items-center gap-4">
        <div className="relative h-16 w-16">
          <div className="absolute inset-0 rounded-full border-4 border-dark-gray opacity-50"></div>
          <div className="absolute inset-0 rounded-full border-4 border-accent-pink border-t-transparent animate-spin shadow-glow-pink"></div>
        </div>
        {message && (
          <span className="text-text-primary text-lg font-medium tracking-wide animate-pulse">
            {message}
          </span>
        )}
      </div>
    </div>
  );
};
