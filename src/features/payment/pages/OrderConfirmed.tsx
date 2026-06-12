import { Button } from "@/shared/components/atoms/Button";
import { CheckoutHeader } from "../components/organisms/CheckoutHeader";
import { Check } from "lucide-react";
import { Anchor } from "@/interfaces/router/Link";

export const OrderConfirmed = () => {
  return (
    <>
      <CheckoutHeader currentStep={4} />

      <div className="flex flex-col items-center w-full max-w-[500px] mx-auto my-10 gap-5">
        <div className="p-7 rounded-full bg-transparent border-7 border-green-500">
          <Check size={44} color="green" />
        </div>
        <h2 className="text-text-primary font-black text-2xl uppercase tracking-widest mb-2">
          Pedido Confirmado
        </h2>
        <p className="text-text-primary text-center mb-6">
          Seu pedido foi confirmado com sucesso! Você receberá um e-mail com os
          detalhes do seu pedido.
        </p>
        <Button color={"primary"} type="button" className="mt-8 w-full">
          <Anchor to="/">Continuar Comprando</Anchor>
        </Button>
      </div>
    </>
  );
};
