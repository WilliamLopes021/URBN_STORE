import { Globe } from "lucide-react";

const logoStyle: React.CSSProperties = {
  fontSize: "clamp(5rem, 28vw, 7rem)",
  letterSpacing: "-0.02em",
};

export const AuthHeader = () => {
  return (
    <div className="relative flex flex-col items-center justify-center py-10 overflow-hidden select-none">

      <h1
        className="relative font-black text-text-primary uppercase tracking-tight leading-none z-10"
        style={logoStyle}
      >
        URBN
        <sup className="text-[0.25em] align-super font-black tracking-normal">
          ™
        </sup>
      </h1>

      <div className="relative z-10 flex items-center gap-2">
        <span className="text-text-primary font-black text-sm tracking-[0.35em] uppercase">
          Built Different.
        </span>
        <Globe className="w-4 h-4 text-accent-blue" />
      </div>
    </div>
  );
};
