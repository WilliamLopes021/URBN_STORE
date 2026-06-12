import { Package } from "lucide-react";
import { orderItem } from "../../constants/mockOrderItem";

export const OrderItemsSummary = () => {
  return (
    <section className="bg-surface border border-border rounded-lg p-6 transition-all duration-300 hover:border-border-strong">
      <div className="flex items-center gap-3 border-b border-border pb-4 mb-4">
        <Package className="text-accent-pink size-6" />
        <div>
          <h2 className="text-lg font-black uppercase tracking-wider">
            Resumo do Pedido
          </h2>
          <p className="text-xs text-light-gray/70">
            {orderItem.length} {orderItem.length === 1 ? "item" : "itens"} no
            seu pedido
          </p>
        </div>
      </div>

      <div className="divide-y divide-border/60 max-h-[360px] overflow-y-auto pr-2 custom-scrollbar">
        {orderItem.map((item) => (
          <div
            key={item.id}
            className="flex gap-4 py-4 first:pt-0 last:pb-0 items-center justify-between"
          >
            <div className="flex gap-4 items-center">
              <div className="relative w-16 h-16 rounded-md overflow-hidden bg-card-bg border border-border/80 shrink-0">
                <img
                  src={item.product.images[0]}
                  alt={item.product.name}
                  className="w-full h-full object-cover"
                />
                <span className="absolute -top-1 -right-1 bg-accent-pink text-white text-[10px] font-black rounded-full w-5 h-5 flex items-center justify-center border border-surface shadow-md">
                  {item.quantity}
                </span>
              </div>
              <div>
                <h3 className="font-bold text-sm uppercase tracking-wide text-text-primary line-clamp-1">
                  {item.product.name}
                </h3>
                <p className="text-xs text-light-gray/60 mt-1">
                  Tamanho:{" "}
                  <span className="text-text-primary font-semibold uppercase">
                    {item.size || "Único"}
                  </span>
                </p>
              </div>
            </div>
            <span className="font-black text-sm text-text-primary whitespace-nowrap">
              {Number(item.product.price) * item.quantity}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};
