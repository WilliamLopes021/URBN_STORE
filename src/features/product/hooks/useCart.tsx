import { useState } from "react";

export const useCart = () => {
  const [cart, setCart] = useState([]);

  const handleAddToCart = (productId: string) => {
    setCart((prev: string[]) => [...prev, productId]);
  };

  const handleRemoveFromCart = (productId: string) => {
    setCart((prev: string[]) => prev.filter((id: string) => id !== productId));
  };

  return {
    cart,
    handleAddToCart,
    handleRemoveFromCart,
  };
};
