export const QuantityController = ({
  quantity,
  onIncreaseQuantity,
  onDecreaseQuantity,
}: {
  quantity: number;
  onIncreaseQuantity: () => void;
  onDecreaseQuantity: () => void;
}) => {
  const buttonStyle = `w-8 h-8 rounded-full flex items-center justify-center bg-transparent text-lg font-semibold text-text-primary`;

  return (
    <div className="flex border border-dark-gray items-center justify-center rounded-full">
      <button
        onClick={onDecreaseQuantity}
        className={`${buttonStyle} cursor-pointer`}
      >
        -
      </button>
      <p className="w-8 h-8 flex items-center justify-center">{quantity}</p>
      <button
        onClick={onIncreaseQuantity}
        className={`${buttonStyle} cursor-pointer`}
      >
        +
      </button>
    </div>
  );
};
