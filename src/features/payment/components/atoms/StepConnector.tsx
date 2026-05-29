interface StepConnectorProps {
  completed?: boolean;
}

export const StepConnector = ({ completed = false }: StepConnectorProps) => (
  <div
    className={`flex-1 h-px ${completed ? "bg-accent-blue" : "bg-border"}`}
  />
);

