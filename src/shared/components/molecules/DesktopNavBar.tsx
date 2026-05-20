import { NAV_LINKS, CATEGORIES_LINKS } from "@/shared/constants/navLinks";
import { Accordion } from "@/shared/components/molecules/Accordion";
import { Anchor } from "@/interfaces/router/Link";

export const DesktopNavBar = () => {
  return (
    <nav
      className={`overflow-hidden duration-300 transition-all ease-in `}
    >
      <ul className="flex  text-lg">
        {NAV_LINKS.map((link) => (
          <li className="hover:border-b transition-all duration-200 -transform-y-1 border-accent-blue" key={link.name}>
            <Anchor
              to={link.href}
              className="text-text-primary font-medium tracking-widest mx-2"
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
    </nav>
  );
};
