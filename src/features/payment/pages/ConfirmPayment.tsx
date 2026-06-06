import { CheckoutHeader } from "../components/organisms/CheckoutHeader";
import { PaymentForm } from "../components/organisms/PaymentForm";

export const ConfirmPayment = () => {
  return (
    <div className="flex flex-col gap-6 max-w-[1000px] w-full mx-auto">
      <CheckoutHeader currentStep={2} />

      <div className="px-6">
        <PaymentForm />
      </div>
    </div>
  );
};
