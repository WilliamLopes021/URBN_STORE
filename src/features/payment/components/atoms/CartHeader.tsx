import { Span } from "@/shared/components/atoms/Span";
import { SubTitle } from "@/shared/components/atoms/SubTitle";
import { Globe } from "lucide-react";

export const CartHeader = () => {
  return (
    <header className="px-4 py-6 md:text-start flex flex-col md:justify-start md:items-start">
      <div className="text-text-primary text-3xl mb-3">
        <SubTitle>
          Seu carrinho <Globe size={20} className="text-accent-blue" />
        </SubTitle>
      </div>
      <Span>Revise seus itens antes de finalizar a compra.</Span>
    </header>
  );
};
