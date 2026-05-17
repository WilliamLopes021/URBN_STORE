import { Span } from "@/shared/components/atoms/Span";
import { ShoppingBag, Check, Heart } from "lucide-react";
import { SizeDisplay } from "../atoms/SizeDisplay";
import { Button } from "@/shared/components/atoms/Button";
import { Accordion } from "@/shared/components/molecules/Accordion";
import type { ProductViewModel } from "@/application/interfaces/view-models/product.viewmodel";

export const DisplayProductDescription = ({
  name,
  category,
  price,
  description,
  sizes,
}: Partial<ProductViewModel>) => {
  return (
    <section className="">
      <header className="border p-8 border-dark-gray text-text-primary text-4xl">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold uppercase tracking-widest">
            {name}
          </h1>
          <Heart />
        </div>
        <p className="text-xl text-accent-blue">{price}</p>
        <div className="mt-5">
          <Span>{category.description}</Span>
        </div>
      </header>
      <div className="w-full py-8 border-x border-dark-gray ">
        <SizeDisplay sizes={sizes} />
        <div className="flex items-center gap-2 text-text-primary text-xs px-8">
          <Check className="w-5 h-5 bg-accent-blue text-primary rounded-full p-1" />
          <p>Em estoque e pronto para a entrega imediata.</p>
        </div>
        <div className="flex justify-center mt-5 px-8">
          <Button color="primary" className="w-full">
            Adicionar ao carrinho
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
