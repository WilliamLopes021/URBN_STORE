export const ModalBase = ({
  children,
  onClose,
}: {
  children: React.ReactNode;
  onClose: () => void;
}) => {
  return (
    <div
      onClick={onClose}
      className="fixed z-50 inset-0 bg-surface/10 h-screen w-screen backdrop-blur-sm p-5"
    >
      <div
        className={`flex flex-col w-full h-full justify-center items-center`}
      >
        {children}
      </div>
    </div>
  );
};
