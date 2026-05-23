import { useState } from "react";
import { Crown, ArrowRight } from "lucide-react";

const TierCard = ({ tier, description, onViewBenefits }) => {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      className="flex flex-col gap-2 p-4 rounded-sm flex-shrink-0"
      style={{
        border: "1px solid #295fee",
        background: "rgba(41,95,238,0.06)",
        minWidth: 165,
        maxWidth: 200,
      }}
    >
      <Crown size={34} style={{ color: "#295fee" }} />
      <div
        className="font-black text-sm uppercase tracking-widest leading-tight"
        style={{ color: "#295fee" }}
      >
        {tier}
      </div>
      <div className="text-[11px] leading-snug" style={{ color: "#888888" }}>
        {description}
      </div>
      <button
        onClick={onViewBenefits}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="flex items-center gap-1 text-[10px] font-black uppercase tracking-widest mt-1 transition-opacity cursor-pointer"
        style={{ color: "#295fee", opacity: hovered ? 0.7 : 1 }}
      >
        View Benefits <ArrowRight size={11} />
      </button>
    </div>
  );
};

export default TierCard;
