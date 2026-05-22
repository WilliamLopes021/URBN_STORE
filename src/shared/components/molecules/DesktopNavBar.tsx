import { NAV_LINKS, CATEGORIES_LINKS } from "@/shared/constants/navLinks";
import { CategoryMenu } from "@/shared/components/molecules/CategoryMenu";
import { Anchor } from "@/interfaces/router/Link";

export const DesktopNavBar = () => {
  return (
    <nav className={`overflow-hidden duration-300 transition-all ease-in`}>
      <ul className="flex items-center gap-6 text-[clamp(0.8rem,1.2vw,2rem)]">
        {NAV_LINKS.map((link) => (
          <li
            className="transition-all duration-200 -transform-y-1 border-accent-blue"
            key={link.name}
          >
            <Anchor
              to={link.href}
              className="text-text-primary font-medium tracking-widest line-clamp-2"
            >
              {link.name}
            </Anchor>
          </li>
        ))}
        {CATEGORIES_LINKS.map(({ label, links }) => (
            <CategoryMenu key={label} sections={[{ label, links }]} />
        ))}
      </ul>
    </nav>
  );
};
