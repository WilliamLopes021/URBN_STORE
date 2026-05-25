export const QuantityDisplay = ({ quantity }: { quantity: number }) => {
  return (
    <div className="flex border border-dark-gray">
      <button className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center">
        -
      </button>
      <p className="w-8 h-8 flex items-center justify-center">{quantity}</p>
      <button className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center">
        +
      </button>
    </div>
  );
};
