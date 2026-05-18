import { Menu, ShoppingCart } from "lucide-react";
import { useState } from "react";
import { MobileNav } from "./MobileNav";

export const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <section className="bg-primary border-b border-dark-gray">
      <div className="flex items-center justify-between p-4">
        <button
          className="text-text-primary"
          onClick={() => setIsMenuOpen((prev) => !prev)}
        >
          <Menu />
        </button>
        <p className="font-medium text-xl text-text-primary">URBN&trade;</p>
        <button className="text-text-primary">
          <ShoppingCart />
        </button>
      </div>
      <MobileNav isVisible={isMenuOpen} />
    </section>
  );
};
