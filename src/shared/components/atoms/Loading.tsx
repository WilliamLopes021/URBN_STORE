interface LoadingProps {
  show: boolean;
  message?: string;
}

export const Loading = ({ show, message }: LoadingProps) => {
  if (!show) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="flex flex-col items-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-white mb-4"></div>
        {message && <span className="text-white text-lg">{message}</span>}
      </div>
    </div>
  );
};
