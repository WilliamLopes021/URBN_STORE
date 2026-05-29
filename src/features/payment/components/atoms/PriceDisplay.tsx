export const PriceDisplay = ({
  price,
  shipping,
  discount,
}: {
  price: number;
  discount?: number;
  shipping?: number;
}) => {
  return (
    <div className="text-text-primary font-semibold uppercase w-full">
      <div className="flex flex-col gap-1 items-end w-full">
        <div className="flex justify-between w-full">
          <span>Subtotal:</span>
          <span>{price}</span>
        </div>
        <div className="flex justify-between w-full">
          <span>Frete:</span>
          <span>{shipping}</span>
        </div>
        <div className="flex justify-between w-full text-accent-pink ">
          <span>Desconto:</span>
          <span>{discount}</span>
        </div>
        <div className="border-b border-light-gray/30 w-full my-2" />
        <div className="flex justify-between w-full text-2xl">
          <span>Total:</span>
          <span className="text-accent-pink shadow-accent-pink shadow-2xl">{price + (shipping ?? 0) - (discount ?? 0)}</span>
        </div>
      </div>
    </div>
  );
};
