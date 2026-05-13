import { Globe } from "lucide-react";
import { Span } from "../atoms/Span";

export const Footer = () => {
  return (
    <footer className="w-full bg-primary border-y border-accent-pink/20 relative overflow-hidden mt-10">
      <div className="absolute inset-0 opacity-10 pointer-events-none bg-gradient-pink-r bg-size-[10px_10px] bg-linear-to-r from-transparent to-accent-pink" />

      <div className="flex flex-col relative z-10 w-full">
        <div className="flex items-center justify-between px-5 py-6 border-b border-accent-pink/20">
          <p className="text-accent-pink text-3xl md:text-4xl font-bold tracking-widest">
            BUILT DIFFERENT
          </p>
          <a className="text-text-primary font-black text-2xl tracking-wider">
            URBN&trade;
          </a>
        </div>

        <div className="flex items-center justify-between px-5 py-4">
          <Span>NO RULES. NO LIMITS.</Span>
          <Span>
            <Globe size={14} />
            WORLDWIDE
          </Span>
        </div>
      </div>
    </footer>
  );
};
