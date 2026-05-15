export const ModalBase = ({
  children,
  onClose,
}: {
  children: React.ReactNode;
  onClose: () => void;
} & React.ComponentProps<"div">) => {
  return (
    <div
      onClick={onClose}
      className="fixed inset-0 bg-surface/10 h-screen w-screen"
    >
      <div
        className={`flex flex-col w-full h-full justify-center items-center`}
      >
        {children}
      </div>
    </div>
  );
};
