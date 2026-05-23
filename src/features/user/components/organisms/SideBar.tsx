import { SIDE_BAR_ITEMS } from "@/features/user/constants/sideBarItems";
import { LogOut } from "lucide-react";
import NavItem from "../atoms/NavItem";
import SidebarBanner from "../molecules/SidebarBanner";

export const Sidebar = ({
  activeNav = "profile",
  onNavChange,
  onLogout,
  onShopNow,
}) => (
  <aside className="flex flex-col h-full shrink-0 w-[210px] bg-surface border-r border-surface/10">

    <nav className="flex flex-col">
      {SIDE_BAR_ITEMS.map((item) => (
        <NavItem
          key={item.id}
          icon={item.icon}
          label={item.label}
          active={activeNav === item.id}
          onClick={() => onNavChange?.(item.id)}
        />
      ))}
    </nav>

    <div className="flex-1" />

    <SidebarBanner onShopNow={onShopNow} />

    <div className="px-3 py-4 mt-2">
      <button
        onClick={onLogout}
        className="flex items-center gap-2 text-[11px] uppercase tracking-widest font-bold hover:text-white transition-colors cursor-pointer w-full px-4 py-2"
        style={{ color: "#555555" }}
      >
        <LogOut size={14} />
        Log Out
      </button>
    </div>

    <div
      className="px-5 pb-4 text-[9px] uppercase tracking-wider"
      style={{ color: "#333333" }}
    >
      © 2025 URBN. All rights reserved.
    </div>
  </aside>
);

