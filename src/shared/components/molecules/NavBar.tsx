import { Menu, ShoppingCart, User, Search } from "lucide-react";
import { useState } from "react";
import { MobileNav } from "./MobileNav";
import { DesktopNavBar } from "./DesktopNavBar";
import { useRouter } from "@/interfaces/router/useRouter";

export const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useRouter();
  const iconsList = [
    { icon: <Search />, path: "/search" },
    { icon: <User />, path: "/profile" },
    { icon: <ShoppingCart />, path: "/cart" },
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
              key={icon.path}
              onClick={() => navigate(icon.path)}
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
