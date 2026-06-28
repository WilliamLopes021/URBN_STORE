import type { OrderItemViewModel } from "@/interfaces/view-models/orderitem.viewmodel";
import { useState } from "react";

export const useCart = () => {
  const [cart, setCart] = useState<Map<string, OrderItemViewModel>>(
    new Map<string, OrderItemViewModel>(),
  );

  const handleAddToCart = (orderItem: OrderItemViewModel) => {
    setCart((prev) => prev.set(orderItem.id, orderItem));
  };

  const handleRemoveFromCart = (orderItemId: string) => {
    setCart((prev) => {
      prev.delete(orderItemId);
      return new Map(prev);
    });
  };

  return {
    cart,
    handleAddToCart,
    handleRemoveFromCart,
  };
};
