import { useState } from "react";

export const useFavoriteItens = () => {
  const [favorites, setFavorites] = useState<string[]>([]);

  function handleFavoriteProduct(id: string) {
    setFavorites((prev) => {
      const isFavorite = prev.includes(id);

      console.log([...prev, id]);
      return isFavorite
        ? prev.filter((favorite) => favorite !== id)
        : [...prev, id];
    });
  }

  return { handleFavoriteProduct, favorites };
};
