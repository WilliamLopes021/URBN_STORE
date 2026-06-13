import { useState, useEffect } from "react";

export const useFavoriteItens = () => {
  const [favorites, setFavorites] = useState<string[]>(() => {
    const storedItems = localStorage.getItem("favorites");
    if (storedItems) return JSON.parse(storedItems);
    return [];
  });

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  function handleFavoriteProduct(id: string) {
    setFavorites((prev) => {
      const isFavorite = prev.includes(id);

      return isFavorite
        ? prev.filter((favorite) => favorite !== id)
        : [...prev, id];
    });
  }

  return { handleFavoriteProduct, favorites };
};
