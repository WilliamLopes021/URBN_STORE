import type { OrderItemViewModel } from "@/application/interfaces/view-models/orderitem.viewmodel";

export const OrderItemCard = ({
  orderItem,
}: {
  orderItem: OrderItemViewModel;
}) => {
  const { product } = orderItem;
  const subTotal = orderItem.quantity * Number(product.price);

  return (
    <div className="flex items-center gap-4 text-text-primary">
      <div className="flex h-20 w-25 items-center justify-center">
        <img
          src={orderItem.product.images[0]}
          alt={orderItem.product.name}
          className="h-full w-full object-cover rounded-md"
        />
      </div>

      <div className="flex-1">
        <h3 className="text-lg font-semibold">{product.name}</h3>
        <p className="text-sm text-light-gray/60 uppercase"> {orderItem.size}</p>
        <p className="text-lg text-accent-blue font-semibold">R${subTotal}</p>
      </div>
    </div>
  );
};
