import { Span } from "@/shared/components/atoms/Span";
import { ShoppingBag, Check, Heart } from "lucide-react";
import { SizeDisplay } from "../atoms/SizeDisplay";
import { Button } from "@/shared/components/atoms/Button";
import { Accordion } from "@/shared/components/molecules/Accordion";
import type { ProductViewModel } from "@/interfaces/view-models/product.viewmodel";
import { useFavoriteItens } from "../../hooks/useFavoriteItens";
import { useCart } from "../../hooks/useCart";

export const DisplayProductDescription = ({
  id,
  name,
  category,
  price,
  description,
  sizes,
}: Partial<ProductViewModel>) => {
  const { handleFavoriteProduct, favorites } = useFavoriteItens();
  const { cart, handleAddToCart, handleRemoveFromCart } = useCart();
  const isFavorite = favorites.includes(id);
  const isCart = cart.includes(id);

  return (
    <section className="max-w-[1000px] mx-auto w-full">
      <header className="border-b border-dark-gray p-8 text-text-primary text-4xl">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold uppercase tracking-widest">
            {name}
          </h1>
          <Heart
            fill={isFavorite ? "#FF0065" : "none"}
            color="#FF0065"
            strokeWidth={1}
            onClick={() => handleFavoriteProduct(id as string)}
            className="cursor-pointer"
          />
        </div>
        <p className="text-xl text-accent-blue">{price}</p>
        <div className="mt-5">
          <Span>{category.description}</Span>
        </div>
      </header>
      <div className="w-full py-8 border-b border-dark-gray ">
        <SizeDisplay sizes={sizes} />
        <div className="flex items-center gap-2 text-text-primary text-xs px-8">
          <Check className="w-5 h-5 bg-accent-blue text-primary rounded-full p-1" />
          <p>Em estoque e pronto para a entrega imediata.</p>
        </div>
        <div className="flex justify-center mt-5 px-8">
          <Button
            color="primary"
            className="w-full"
            onClick={() => {
              return isCart ? handleRemoveFromCart(id) : handleAddToCart(id);
            }}
          >
            {isCart ? "Remover do carrinho" : "Adicionar ao carrinho"}
            <ShoppingBag className="w-5 h-5" />
          </Button>
        </div>

        <Accordion
          sections={[
            {
              label: "Detalhes do produto",
              links: [{ name: description, href: "#" }],
            },
            {
              label: "Compras e devoluções",
              links: [
                { name: "Envio expresso: até 2 dias úteis", href: "#" },
                { name: "Devoluções gratuitas: 30 dias", href: "#" },
                { name: "Pagamento seguro", href: "#" },
              ],
            },
            {
              label: "Cuidados",
              links: [{ name: "Limpe com um pano úmido", href: "#" }],
            },
          ]}
        />
      </div>
    </section>
  );
};
