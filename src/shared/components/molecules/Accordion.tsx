import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { FOOTER_SECTIONS } from "@/shared/constants/footerSections";
import { SOCIAL_LINKS } from "@/shared/constants/socialLinks";
import { Anchor } from "@/interfaces/router/Link";

export const FooterAccordion = () => {
  const [openSection, setOpenSection] = useState<string | null>(null);

  const toggle = (label: string) => {
    setOpenSection((prev) => (prev === label ? null : label));
  };

  return (
    <div className="bg-surface w-full px-5 py-4">
      <div className="divide-y divide-dark-gray">
        {FOOTER_SECTIONS.map(({ label, links }) => {
          const isOpen = openSection === label;

          return (
            <div key={`${label}-footer`}>
              <button
                onClick={() => toggle(label)}
                className="w-full flex items-center justify-between py-4 text-left group"
                aria-expanded={isOpen}
              >
                <span className="text-text-primary font-black text-sm tracking-widest">
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

      <div className="pt-6">
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
    </div>
  );
};
