import type { StepState } from "../../types/checkout";

interface StepLabelProps {
  label: string;
  state: StepState;
}

const stateClasses: Record<StepState, string> = {
  active: "text-accent-blue",
  inactive: "text-state-disabled",
  completed: "text-light-gray",
};

export const StepLabel = ({ label, state }: StepLabelProps) => (
  <span
    className={`text-[10px] font-black uppercase tracking-widest ${stateClasses[state]}`}
  >
    {label}
  </span>
);

