import { User } from "lucide-react";

const MobileNav = () => {
  return (
    <nav className="p-5">
      <ul className="flex flex-col gap-2">
        <li>
          <a href="#" className="text-text-primary font-medium text-3xl">
            Categorias
          </a>
        </li>
        <li>
          <a href="#" className="text-text-primary font-medium text-3xl">
            Novidades
          </a>
        </li>
        <li>
          <a href="#" className="text-text-primary font-medium text-3xl">
            Masculino
          </a>
        </li>
        <li>
          <a href="#" className="text-text-primary font-medium text-3xl">
            Feminino
          </a>
        </li>
      </ul>

      <div className="flex items-center justify-center gap-2 py-3 mt-10 border border-dark-gray text-text-primary">
        <User /> Login/Register
      </div>
    </nav>
  );
};

export default MobileNav;
