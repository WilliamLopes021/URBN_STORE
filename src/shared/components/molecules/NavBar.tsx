import { Menu, ShoppingCart, User, Search } from "lucide-react";
import { useState } from "react";
import { MobileNav } from "./MobileNav";
import { DesktopNavBar } from "./DesktopNavBar";

export const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const iconsList = [
    { icon: <Search />, key: "search" },
    { icon: <User />, key: "user" },
    { icon: <ShoppingCart />, key: "shopping-cart" },
  ];

  return (
    <section className="bg-primary border-b border-dark-gray px-5">
      <div className="flex items-center justify-between p-4">
        <button
          className="text-text-primary md:hidden"
          onClick={() => setIsMenuOpen((prev) => !prev)}
        >
          <Menu />
        </button>
        <p className="font-medium text-[clamp(1rem,2vw,2rem)] text-text-primary">
          URBN&trade;
        </p>
        <div className="hidden md:flex">
          <DesktopNavBar />
        </div>
        <div className="hidden md:flex md:gap-6">
          {iconsList.map((icon) => (
            <button
              key={icon.key}
              className="text-text-primary hidden sm:block cursor-pointer"
            >
              {icon.icon}
            </button>
          ))}
        </div>
      </div>
      <MobileNav isVisible={isMenuOpen} />
    </section>
  );
};
