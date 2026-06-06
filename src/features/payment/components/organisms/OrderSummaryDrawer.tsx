import { useState } from "react";
import { OrderSummaryBar } from "../molecules/OrderSummaryBar";
import type { PriceSummary } from "../../types/checkout";
import type { OrderItemViewModel } from "@/interfaces/view-models/orderitem.viewmodel";

interface OrderSummaryDrawerProps {
  items: OrderItemViewModel[];
  prices: PriceSummary;
  thumbnailSrc: string;
}

export const OrderSummaryDrawer = ({
  items,
  prices,
  thumbnailSrc,
}: OrderSummaryDrawerProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-0 inset-x-0 z-50 bg-card-bg border-t border-border">
      <OrderSummaryBar
        itemCount={items.length}
        total={prices.total}
        thumbnailSrc={thumbnailSrc}
        isOpen={isOpen}
        onToggle={() => setIsOpen((prev) => !prev)}
      />

      {isOpen && (
        <div className="px-4 pt-2 pb-6 border-t border-border max-h-[70vh] overflow-y-auto">
          <div className="divide-y divide-border">
            {items.map((item) => (
              <div key={item.id} className="flex items-center gap-3 py-3">
                <img
                  src={item.product.images[0]}
                  alt={item.product.name}
                  className="w-14 h-14 object-cover rounded-sm shrink-0"
                />
                <div className="flex-1 min-w-0">
                  <p className="text-text-primary font-black text-xs uppercase tracking-wide">
                    {item.product.name}
                  </p>
                  <p className="text-light-gray text-xs mt-0.5">
                    {item.size}
                  </p>
                </div>
                <span className="text-accent-pink font-black text-sm">
                  {item.unitPrice}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-4 pt-3 border-t border-border space-y-2">
            <div className="flex justify-between">
              <span className="text-light-gray text-xs uppercase tracking-wider">
                Subtotal
              </span>
              <span className="text-text-primary text-xs font-semibold">
                {prices.subtotal}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-light-gray text-xs uppercase tracking-wider">
                Shipping
              </span>
              <span className="text-text-primary text-xs font-semibold">
                {prices.shipping}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-light-gray text-xs uppercase tracking-wider">
                Taxes
              </span>
              <span className="text-text-primary text-xs font-semibold">
                {prices.taxes}
              </span>
            </div>
          </div>

          <div className="flex justify-between mt-4 pt-3 border-t border-border">
            <span className="text-text-primary font-black uppercase tracking-widest text-sm">
              Total
            </span>
            <span className="text-accent-pink font-black text-xl">
              {prices.total}
            </span>
          </div>
        </div>
      )}
    </div>
  );
};
