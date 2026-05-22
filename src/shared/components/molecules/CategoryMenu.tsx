import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { type FooterSection } from "@/shared/constants/footerSections";
import { Anchor } from "@/interfaces/router/Link";

export const CategoryMenu = ({ sections }: { sections: FooterSection[] }) => {
  const [openSection, setOpenSection] = useState<string | null>(null);

  const toggle = (label: string) => {
    setOpenSection((prev) => (prev === label ? null : label));
  };

  return (
    <div className="w-full">
      <div className="divide-y divide-dark-gray">
        {sections.map(({ label, links }) => {
          const isOpen = openSection === label;

          return (
            <div key={`${label}-footer`}>
              <button
                onClick={() => toggle(label)}
                className="w-full flex items-center justify-between py-4 text-left group"
                aria-expanded={isOpen}
              >
                <span className="text-text-primary font-medium tracking-widest cursor-pointer">
                  {label}
                </span>
                <ChevronDown
                  size={16}
                  className={`text-light-gray transition-transform duration-300 group-hover:text-text-primary ${
                    isOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              <div
                className={`absolute transition-all duration-300 ease-in-out bg-bg z-100 w-full max-w-[20%] ${
                  isOpen
                    ? "opacity-100 pointer-events-auto translate-y-0"
                    : "opacity-0 pointer-events-none -translate-y-1"
                }`}
              >
                <ul className="flex w-full divide-y divide-dark-gray flex-col border border-dark-gray rounded-sm">
                  {links.map((link) => (
                    <li key={link.name}>
                      <Anchor
                        to={link.href}
                        className=" flex items-center gap-2 px-3 py-2.5 text-light-gray text-sm hover:text-text-primary transition-all duration-200"
                      >
                        <span className="w-1 h-1 rounded-full bg-dark-gray/60 transition-colors duration-200 shrink-0" />
                        {link.name}
                      </Anchor>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
