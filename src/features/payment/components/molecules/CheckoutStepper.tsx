import { Fragment } from "react";
import { CheckoutStep } from "./CheckoutStep";
import { StepConnector } from "../atoms/StepConnector";
import type { Step, StepState } from "../../types/checkout";

interface CheckoutStepperProps {
  currentStep: number;
}

const STEPS: Step[] = [
  { number: 1, label: "Information" },
  { number: 2, label: "Shipping" },
  { number: 3, label: "Payment" },
];

const getStepState = (stepNumber: number, currentStep: number): StepState => {
  if (stepNumber < currentStep) return "completed";
  if (stepNumber === currentStep) return "active";
  return "inactive";
};

export const CheckoutStepper = ({ currentStep }: CheckoutStepperProps) => (
  <div className="flex items-start w-full px-6 py-4">
    {STEPS.map((step, index) => (
      <Fragment key={step.number}>
        <CheckoutStep
          number={step.number}
          label={step.label}
          state={getStepState(step.number, currentStep)}
        />
        {index < STEPS.length - 1 && (
          <div className="flex-1 flex items-start pt-4">
            <StepConnector completed={step.number < currentStep} />
          </div>
        )}
      </Fragment>
    ))}
  </div>
);

