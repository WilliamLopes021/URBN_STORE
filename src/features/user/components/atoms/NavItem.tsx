import { useState } from "react";

const NavItem = ({ icon: Icon, label, active = false, onClick }) => {
  const [hovered, setHovered] = useState(false);
  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="flex items-center gap-3 w-full px-5 py-3 text-xs font-black uppercase tracking-widest transition-all duration-150 cursor-pointer text-left"
      style={{
        color: active ? "#fc1474" : hovered ? "#ffffff" : "#888888",
        background: active ? "rgba(252,20,116,0.07)" : "transparent",
        borderLeft: active ? "2px solid #fc1474" : "2px solid transparent",
      }}
    >
      <Icon size={15} strokeWidth={active ? 2.5 : 2} />
      {label}
    </button>
  );
};

export default NavItem;
