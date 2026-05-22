import { User } from "lucide-react";
import { NAV_LINKS, CATEGORIES_LINKS } from "@/shared/constants/navLinks";
import { Accordion } from "@/shared/components/molecules/Accordion";
import { Anchor } from "@/interfaces/router/Link";

export const MobileNav = ({ isVisible }: { isVisible: boolean }) => {
  return (
    <nav
      className={`border-t-2 border-accent-blue overflow-hidden duration-300 transition-all ease-in ${isVisible ? "max-h-screen p-5" : "max-h-0 opacity-0"}`}
    >
      <ul className="flex flex-col text-lg">
        {NAV_LINKS.map((link) => (
          <li className="py-3 border-b border-dark-gray" key={link.name}>
            <Anchor
              to={link.href}
              className="text-text-primary font-black tracking-widest px-4"
            >
              {link.name}
            </Anchor>
          </li>
        ))}
        {CATEGORIES_LINKS.map(({ label, links }) => (
          <div className="-my-4 border-b border-dark-gray" key={label}>
            <Accordion key={label} sections={[{ label, links }]} />
          </div>
        ))}
      </ul>

      <Anchor
        to="/login"
        className="flex items-center justify-center gap-2 py-3 mt-10 border border-dark-gray text-text-primary"
      >
        <User /> Login/Register
      </Anchor>
    </nav>
  );
};
