import { ChevronLeft } from "lucide-react";
import { CheckoutStepper } from "../molecules/CheckoutStepper";
import { useRouter } from "@/interfaces/router/useRouter";

interface CheckoutHeaderProps {
  currentStep: number;
}

export const CheckoutHeader = ({ currentStep }: CheckoutHeaderProps) => {
  const router = useRouter();

  return (
    <header className="w-full text-text-primary flex items-center bg-surface border-b border-border max-w-7xl mx-auto">
      <button onClick={() => router(-1)}>
        <ChevronLeft className="size-9" />
      </button>
      <CheckoutStepper currentStep={currentStep} />
    </header>
  );
};
