import { Globe } from "lucide-react";
import { Span } from "../atoms/Span";
import { Accordion } from "./Accordion";
import { NewsletterSection } from "./NewsLetterSection";
import { FOOTER_SECTIONS } from "@/shared/constants/footerSections";
import { SOCIAL_LINKS } from "@/shared/constants/socialLinks";

export const Footer = () => {
  return (
    <footer className="w-full bg-surface border-y border-accent-pink/20 relative overflow-hidden mt-10">
      <NewsletterSection />
      <Accordion sections={FOOTER_SECTIONS} />

      <div className="py-6 px-5 bg-surface border-t border-accent-pink/20">
        <p className="text-text-primary font-black text-sm tracking-widest mb-4">
          FOLLOW THE CHAOS
        </p>
        <div className="flex gap-5">
          {SOCIAL_LINKS.map((social) => (
            <a
              key={social.name}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-light-gray text-sm hover:text-text-primary transition-colors duration-200"
            >
              {social.name}
            </a>
          ))}
        </div>
      </div>

      <div className="absolute w-full h-full opacity-10 pointer-events-none bg-gradient-pink-r bg-size-[10px_10px] bg-linear-to-r from-transparent to-accent-pink" />

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
