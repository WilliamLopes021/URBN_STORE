import { Avatar } from "../atoms/Avatar";
import type { UserViewModel } from "@/application/interfaces/view-models/user.viewmodel";
import { SquarePen } from "lucide-react";

export const ProfileHeader = ({
  user,
  orders,
  favorites,
}: {
  user: UserViewModel;
  orders: number;
  favorites: number;
}) => {
  const data = [
    { name: "Pedidos", amount: orders },
    { name: "Favoritos", amount: favorites },
  ];
  return (
    <div className="flex flex-col md:flex-row gap-7 items-center pb-6 p-5 text-text-primary w-full text-lg">
      <div className="flex items-center gap-4 relative">
        <Avatar src={user.profilePicture} alt={user.name} />
        <SquarePen className="text-light-gray/40 size-4 absolute bottom-0 right-0 cursor-pointer hover:border-zinc-800/80 transition-all duration-300" />
      </div>

      <div className="flex flex-col items-center md:items-start gap-2">
        <div>
          <h2 className="text-2xl font-black uppercase tracking-wider">
            {user.name}
          </h2>
          <p className="text-gray-500">{user.email}</p>
        </div>
        <div className="flex gap-3">
          {data.map((item) => (
            <div
              key={item.name}
              className="flex flex-col border-r border-r-dark-gray last:border-none pr-3"
            >
              <span className="font-bold">{item.amount}</span>
              <span className="text-light-gray/40">{item.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
