import type { OrderItemViewModel } from "@/application/interfaces/view-models/orderitem.viewmodel";
import { QuantityController } from "@/features/payment/components/atoms/QuantityController";
import { TrashIcon } from "lucide-react";

export const OrderItemCard = ({
  orderItem,
}: {
  orderItem: OrderItemViewModel;
}) => {
  const { product } = orderItem;
  const subTotal = orderItem.quantity * Number(product.price);

  return (
    <div className="flex items-center gap-4 text-text-primary py-3 border-b border-light-gray/20">
      <div className="flex h-35 w-40 items-center justify-center">
        <img
          src={orderItem.product.images[0]}
          alt={orderItem.product.name}
          className="h-full w-full object-cover rounded-md"
        />
      </div>

      <div className="flex-1 self-center flex flex-col gap-1 ">
        <h3 className="text-lg font-semibold">{product.name}</h3>
        <p className="text-sm text-light-gray/60 uppercase">
          {" "}
          {orderItem.size}
        </p>
        <p className="text-xl text-accent-blue font-semibold">R${subTotal}</p>
      </div>
      <div className="self-end flex items-center gap-3">
        <QuantityController
          quantity={orderItem.quantity}
          onIncreaseQuantity={() => {}}
          onDecreaseQuantity={() => {}}
        />
        <TrashIcon className="w-5 h-5 cursor-pointer" />
      </div>
    </div>
  );
};
