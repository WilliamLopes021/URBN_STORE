import { StepDot } from "../atoms/StepDot";
import { StepLabel } from "../atoms/StepLabel";
import type { StepState } from "../../types/checkout";

interface CheckoutStepProps {
  number: number;
  label: string;
  state: StepState;
}

export const CheckoutStep = ({ number, label, state }: CheckoutStepProps) => (
  <div className="flex flex-col items-center gap-1">
    <StepDot number={number} state={state} />
    <StepLabel label={label} state={state} />
  </div>
);

