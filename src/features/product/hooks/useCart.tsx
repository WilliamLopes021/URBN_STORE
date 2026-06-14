import { useState } from "react";

export const useCart = () => {
  const [cart, setCart] = useState<string[]>([]);

  const handleAddToCart = (productId: string) => {
    setCart((prev) => [...prev, productId]);
  };

  const handleRemoveFromCart = (productId: string) => {
    setCart((prev) => prev.filter((id) => id !== productId));
  };

  return {
    cart,
    handleAddToCart,
    handleRemoveFromCart,
  };
};
