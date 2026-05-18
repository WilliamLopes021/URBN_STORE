import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { type FooterSection } from "@/shared/constants/footerSections";
import { Anchor } from "@/interfaces/router/Link";

export const Accordion = ({ sections }: { sections: FooterSection[] }) => {
  const [openSection, setOpenSection] = useState<string | null>(null);

  const toggle = (label: string) => {
    setOpenSection((prev) => (prev === label ? null : label));
  };

  return (
    <div className="w-full px-5 py-4">
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
                <span className="text-text-primary font-black text-lg tracking-widest">
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
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  isOpen ? "max-h-64 opacity-100 pb-4" : "max-h-0 opacity-0"
                }`}
              >
                <ul className="flex flex-col gap-3">
                  {links.map((link) => (
                    <li key={link.name}>
                      <Anchor
                        to={link.href}
                        className="text-light-gray text-sm hover:text-text-primary transition-colors duration-200"
                      >
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
