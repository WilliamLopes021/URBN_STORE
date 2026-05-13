export const SizeDisplay = ({ sizes }: { sizes: string[] }) => {
  return (
    <div className="my-4">
      <div className="flex justify-between items-center">
        <span className="text-text-primary">Tamanhos</span>
        <span className="text-accent-blue">Guia</span>
      </div>
      <div className="flex gap-3 my-3">
        {sizes.map((size, index) => {
          return (
            <span
              key={`${index}-${size}`}
              className="w-full h-12 flex items-center justify-center border border-dark-gray text-text-primary rounded-lg cursor-pointer  hover:border-accent-blue transition-colors duration-300 ease-in-out"
            >
              {size}
            </span>
          );
        })}
      </div>
    </div>
  );
};
