export const SizeDisplay = () => {
  return (
    <div className="my-4">
      <div className="flex justify-between items-center">
        <span className="text-text-primary">Tamanhos</span>
        <span className="text-accent-blue">Guia</span>
      </div>
      <div className="flex justify-between my-3">
        {Array.from({ length: 4 }).map((_, index) => {
          return (
            <span
              key={index}
              className="w-16 h-12 flex items-center justify-center border border-dark-gray text-text-primary rounded-lg"
            >
              M
            </span>
          );
        })}
      </div>
    </div>
  );
};
