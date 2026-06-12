import { useState } from "react";
import { CheckoutHeader } from "../components/organisms/CheckoutHeader";
import { orderItem } from "../constants/mockOrderItem";
import { useRouter } from "@/interfaces/router/useRouter";
import type { PaymentMethod } from "../types/payment";

import { OrderItemsSummary } from "../components/organisms/OrderItemsSummary";
import { ConfirmShippingAddress } from "../components/organisms/ConfirmShippingAddress";
import { ConfirmPaymentMethod } from "../components/organisms/ConfirmPaymentMethod";
import { PurchaseSummarySidebar } from "../components/organisms/PurchaseSummarySidebar";

export const ConfirmOrder = () => {
  const router = useRouter();

  const [paymentMethod, setPaymentMethod] =
    useState<PaymentMethod>("credit_card");
  const [address, setAddress] = useState({
    recipientName: "Lucas Andrade",
    street: "Rua Augusta",
    number: "1234",
    apartment: "Apto 56",
    neighborhood: "Consolação",
    city: "São Paulo",
    state: "SP",
    zip: "01304-001",
  });

  const [cardDetails, setCardDetails] = useState({
    number: "4532 •••• •••• 4321",
    holder: "LUCAS ANDRADE",
    expiry: "12/31",
    cvv: "•••",
  });

  // Dynamic Price Calculations (Mocking based on actual items in mockOrderItem)
  const subtotalValue = orderItem.reduce(
    (acc, item) => acc + Number(item.product.price) * item.quantity,
    0,
  );

  const shippingValue = 0; // Hardcoded for now
  const taxesValue = "R$ 43,92"; // Hardcoded for now
  const totalValue = (subtotalValue + shippingValue).toFixed(2); // Hardcoded for now

  return (
    <div className="min-h-screen bg-bg text-text-primary pb-24 font-sans">
      <CheckoutHeader currentStep={3} />

      <main className="max-w-7xl mx-auto px-4 md:px-8 mt-6">
        <h1 className="text-3xl md:text-4xl font-black uppercase tracking-tight mb-8">
          Finalizar Pedido
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-8 space-y-6">
            <OrderItemsSummary />

            <ConfirmShippingAddress address={address} setAddress={setAddress} />

            <ConfirmPaymentMethod
              paymentMethod={paymentMethod}
              setPaymentMethod={setPaymentMethod}
              cardDetails={cardDetails}
              setCardDetails={setCardDetails}
            />
          </div>

          <div className="lg:col-span-4 lg:sticky lg:top-6">
            <PurchaseSummarySidebar
              subtotalValue={subtotalValue}
              shippingValue={shippingValue}
              taxesValue={taxesValue}
              totalValue={totalValue}
              onConfirm={() => router("/success-payment")}
            />
          </div>
        </div>
      </main>
    </div>
  );
};
