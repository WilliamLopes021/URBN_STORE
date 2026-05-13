import { Menu, ShoppingCart } from "lucide-react";

export const NavBar = () => {
  return (
    <section className="bg-primary border-b border-dark-gray">
      <div className="flex items-center justify-between p-4">
        <button className="text-text-primary">
          <Menu />
        </button>
        <p className="font-medium text-xl text-text-primary">URBN&trade;</p>
        <button className="text-text-primary">
          <ShoppingCart />
        </button>
      </div>
      {/* <MobileNav /> */}
    </section>
  );
};
