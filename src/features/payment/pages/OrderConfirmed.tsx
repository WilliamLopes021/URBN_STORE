import { Button } from "@/shared/components/atoms/Button";
import { CheckoutHeader } from "../components/organisms/CheckoutHeader";
import { Check } from "lucide-react";

export const OrderConfirmed = () => {
  return (
    <div>
      <CheckoutHeader currentStep={4} />

      <div className="flex flex-col items-center w-full max-w-[500px] mx-auto">
        <div className="p-7 rounded-full bg-transparent border-7 border-green-500">
          <Check size={44} color="white" />
        </div>
        <h2 className="text-text-primary font-black text-lg uppercase tracking-widest mb-2">
          Pedido Confirmado
        </h2>
        <p className="text-text-primary text-center mb-6">
          Seu pedido foi confirmado com sucesso! Você receberá um e-mail com os
          detalhes do seu pedido.
        </p>
        <Button color={"primary"} type="submit" className="mt-8 w-full">
          Continuar Comprando
        </Button>
      </div>
    </div>
  );
};
