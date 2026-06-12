import { useState } from "react";
import { FormField } from "./FormField";
import { Button } from "@/shared/components/atoms/Button";
import { Anchor } from "@/interfaces/router/Link";

export const CreditCardForm = () => {
  const [form] = useState({
    cardNumber: "",
    expiry: "",
    cvv: "",
  });

  return (
    <div className="flex flex-col gap-5 w-full">
      <FormField
        id="cardNumber"
        name="cardNumber"
        label="Número do Cartão"
        value={form.cardNumber}
        onChange={() => {}}
      />

      <div className="grid grid-cols-2 gap-5">
        <FormField
          id="expiry"
          name="expiry"
          label="Data de Expiração"
          value={form.expiry}
          onChange={() => {}}
        />
        <FormField
          id="cvv"
          name="cvv"
          label="CVV"
          value={form.cvv}
          onChange={() => {}}
        />
      </div>

      <Button color={"primary"} type="button" className="mt-4">
        <Anchor to="/confirm-order">Completar o Pagamento</Anchor>
      </Button>
    </div>
  );
};
