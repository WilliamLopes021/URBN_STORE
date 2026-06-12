import { Menu, ShoppingCart, User, Search } from "lucide-react";
import { useState } from "react";
import { MobileNav } from "./MobileNav";
import { DesktopNavBar } from "./DesktopNavBar";
import { useRouter } from "@/interfaces/router/useRouter";
import { SearchModal } from "@/shared/components/modal/SearchModal";

export const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const navigate = useRouter();

  const iconsList = [
    { icon: <Search />, action: () => setIsSearchOpen(true) },
    { icon: <User />, action: () => navigate("/profile") },
    { icon: <ShoppingCart />, action: () => navigate("/cart") },
  ];

  return (
    <>
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
            {iconsList.map((item, i) => (
              <button
                key={i}
                onClick={item.action}
                className="text-text-primary hidden sm:block cursor-pointer hover:text-accent-blue transition-colors duration-200"
              >
                {item.icon}
              </button>
            ))}
          </div>
        </div>
        <MobileNav isVisible={isMenuOpen} />
      </section>

      {isSearchOpen && (
        <SearchModal onClose={() => setIsSearchOpen(false)} />
      )}
    </>
  );
};

