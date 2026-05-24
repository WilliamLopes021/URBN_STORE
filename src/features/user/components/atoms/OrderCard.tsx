import type { OrderViewModel } from "@/application/interfaces/view-models/order.viewmodel";
import { ChevronRight, Loader, Package, Check, X } from "lucide-react";

export const OrderCard = ({ order }: { order: OrderViewModel }) => {
  const statusInfo = {
    PENDING: { color: "text-yellow-400", icon: <Loader size={20} /> },
    SHIPPED: { color: "text-accent-blue", icon: <Package size={20} /> },
    DELIVERED: { color: "text-accent-pink", icon: <Check size={20} /> },
    CANCELLED: { color: "text-red-400", icon: <X size={20} /> },
  };

  const showQuantityLabel = order.products.length - 1 > 0;
  const quantityLabel = `+ ${order.products.length - 1} produto(s)`;

  const { color, icon } = statusInfo[order.status];

  return (
    <div className="flex justify-between items-center border border-dark-gray rounded-lg p-4">
      <div className="flex items-center gap-4">
        <div className="w-1/4">
          <img
            src={order.products[0].images[0]}
            alt={`Imagem de ${order.products[0].name}`}
            className="w-full h-full object-contain"
          />
        </div>
        <div className="flex flex-col gap-1 text-light-gray">
          <div className="flex text-sm gap-2 items-baseline">
            <p className="font-bold text-lg text-text-primary">
              {`${order.products[0].name}`}
            </p>
            <p>{`${showQuantityLabel ? quantityLabel : ""}`}</p>
          </div>

          <p>{`Data: ${order.date.toLocaleDateString("pt-BR")}`}</p>
          <p>{`Total: ${order.total}`}</p>
        </div>
      </div>

      <div className={`flex items-center gap-2 ${color}`}>
        {icon}
        <p className="">{`${order.status}`}</p>
        <ChevronRight />
      </div>
    </div>
  );
};
