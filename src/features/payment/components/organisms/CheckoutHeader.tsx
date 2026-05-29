import { CheckoutStepper } from "../molecules/CheckoutStepper";

interface CheckoutHeaderProps {
  currentStep: number;
}

export const CheckoutHeader = ({ currentStep }: CheckoutHeaderProps) => (
  <header className="w-full bg-surface border-b border-border">
    <CheckoutStepper currentStep={currentStep} />
  </header>
);

