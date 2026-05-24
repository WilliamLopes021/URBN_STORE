import { ChevronRight } from "lucide-react";

export const InfoCard = ({
  icon,
  label,
  data,
  description,
  style = "pink",
}: {
  icon: React.ReactNode;
  label: string;
  data: Record<string, unknown>[];
  description: string;
  style: "pink" | "blue";
}) => {
  const isPink = style === "pink";
  const bgGradient = isPink
    ? "bg-linear-to-r from-black via-black/95 to-accent-pink/15"
    : "bg-linear-to-r from-black via-black/95 to-accent-blue/15";
  
  const iconColor = isPink ? "text-accent-pink" : "text-accent-blue";
  const glowFilter = isPink
    ? "drop-shadow(0 0 8px rgba(252, 20, 116, 0.6))"
    : "drop-shadow(0 0 8px rgba(41, 95, 238, 0.6))";

  return (
    <div
      className={`flex items-center gap-4 ${bgGradient} text-text-primary border border-zinc-900/60 p-4 rounded-xl cursor-pointer hover:border-zinc-800/80 transition-all duration-300`}
    >
      <div
        className={`${iconColor} flex items-center justify-center`}
        style={{ filter: glowFilter }}
      >
        {icon}
      </div>
      <div className="flex-1 min-w-0">
        <p className="font-bold text-lg uppercase tracking-wider font-sans select-none">
          {label}
        </p>
        <p className="text-light-gray/50 text-lg mt-0.5 select-none font-sans">
          {data.length} {description}
        </p>
      </div>
      <ChevronRight className="text-light-gray/40 size-5" />
    </div>
  );
};
