import emptycart from "@/assets/icons/urbn_icon_empty_bag_neon.png";
import { Button } from "@/shared/components/atoms/Button";
import { Span } from "@/shared/components/atoms/Span";

export const EmptyCartWarning = () => {
  return (
    <div className="max-w-[1000px] mx-auto w-full px-5 flex flex-col gap-8 py-3 text-text-primary items-center justify-center">
      <div className="w-50 flex items-center justify-center">
        <img src={emptycart} className="size-full" />
      </div>
      <div className="text-center">
        <h1 className="text-2xl tracking-wider uppercase my-5">
          Sua sacola está vazia
        </h1>
        <Span>
          Adicione produtos para começar a comprar. Navegue pelas categorias
          para encontrar o que você precisa.
        </Span>
      </div>

      <Button>Continuar Comprando</Button>
    </div>
  );
};
