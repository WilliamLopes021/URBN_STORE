import { ArrowRight } from "lucide-react";

type ButtonProps = {
  label?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
};

export const GrungeButton = ({
  label = "Login",
  onClick,
  type = "button",
  disabled = false,
}: ButtonProps) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className="relative w-full overflow-hidden bg-accent-pink hover:bg-button-primary-hover
                 disabled:opacity-50 disabled:cursor-not-allowed
                 transition-colors duration-200 group"
    >

      <div className="relative z-10 flex items-center justify-center gap-3 px-8 py-4">
        <span className="text-text-primary font-black text-sm tracking-[0.25em] uppercase">
          {label}
        </span>
        <ArrowRight
          size={16}
          className="text-text-primary transition-transform duration-200 group-hover:translate-x-1"
        />
      </div>
    </button>
  );
};
