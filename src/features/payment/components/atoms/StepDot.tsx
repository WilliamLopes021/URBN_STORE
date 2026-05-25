import type { StepState } from "../../types/checkout";

interface StepDotProps {
  number: number;
  state: StepState;
}

const stateClasses: Record<StepState, string> = {
  active: "border-2 border-accent-blue text-accent-blue",
  inactive: "border-2 border-border text-state-disabled",
  completed: "border-2 border-accent-blue bg-accent-blue text-text-primary",
};

const StepDot = ({ number, state }: StepDotProps) => (
  <div
    className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-black ${stateClasses[state]}`}
  >
    {number}
  </div>
);

export default StepDot;
