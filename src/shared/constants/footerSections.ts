export type FooterSection = {
  label: string;
  links: { name: string; href: string }[];
};

export const FOOTER_SECTIONS: FooterSection[] = [
  {
    label: "SHOP",
    links: [
      { name: "New Arrivals", href: "/shop/new" },
      { name: "Hoodies", href: "/category/hoodies" },
      { name: "T-Shirts", href: "/category/tshirts" },
      { name: "Accessories", href: "/category/accessories" },
    ],
  },
  {
    label: "ABOUT",
    links: [
      { name: "Our Story", href: "/about" },
      { name: "Sustainability", href: "/about/sustainability" },
      { name: "Careers", href: "/about/careers" },
    ],
  },
  {
    label: "HELP",
    links: [
      { name: "FAQ", href: "/help/faq" },
      { name: "Shipping & Returns", href: "/help/shipping" },
      { name: "Size Guide", href: "/help/size-guide" },
      { name: "Contact Us", href: "/help/contact" },
    ],
  },
  {
    label: "LEGAL",
    links: [
      { name: "Privacy Policy", href: "/legal/privacy" },
      { name: "Terms of Service", href: "/legal/terms" },
      { name: "Cookie Policy", href: "/legal/cookies" },
    ],
  },
];
