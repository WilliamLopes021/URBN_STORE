import { useState } from "react";
import { PaymentMethodCard } from "../atoms/PaymentMethodCard";
import { CreditCard, BadgeDollarSign } from "lucide-react";
import { CreditCardForm } from "../molecules/CreditCardForm";
import { PixForm } from "../molecules/PixForm";

// interface PaymentFormProps {
//   onSubmit: (data: PaymentFormData) => void;
// }

export const PaymentForm = () => {
  const [method, setMethod] = useState<"credit_card" | "pix">("credit_card");

  return (
    <div className="px-4 py-6 flex flex-col gap-3 ">
      <h2 className="text-text-primary font-black text-lg uppercase tracking-widest mb-2">
        Método de Pagamento
      </h2>
      <div className="flex justify-center items-center gap-4">
        <button type="button" onClick={() => setMethod("credit_card")}>
          <PaymentMethodCard
            icon={<CreditCard size={44} />}
            label="Cartão de Crédito"
            selected={method === "credit_card"}
          />
        </button>
        <button type="button" onClick={() => setMethod("pix")}>
          <PaymentMethodCard
            icon={<BadgeDollarSign size={44} />}
            label="PIX"
            selected={method === "pix"}
          />
        </button>
      </div>
      <div className="bg-dark-gray/20 border border-border rounded-lg p-6 w-full">
        {method === "credit_card" && <CreditCardForm />}
        {method === "pix" && <PixForm />}
      </div>
    </div>
  );
};
