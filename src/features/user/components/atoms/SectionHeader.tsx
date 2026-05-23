import { useState } from "react";
import { ArrowRight } from "lucide-react";

const SectionHeader = ({ title, actionLabel, onAction }) => {
  const [hovered, setHovered] = useState(false);
  return (
    <div className="flex items-center justify-between mb-4">
      <h3
        className="font-black uppercase tracking-widest text-xs"
        style={{ color: "#ffffff" }}
      >
        {title}
      </h3>
      {actionLabel && (
        <button
          onClick={onAction}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          className="flex items-center gap-1 text-[10px] font-black uppercase tracking-widest transition-opacity cursor-pointer"
          style={{ color: "#fc1474", opacity: hovered ? 0.7 : 1 }}
        >
          {actionLabel}
          <ArrowRight size={11} />
        </button>
      )}
    </div>
  );
};

export default SectionHeader;
