const StatItem = ({ icon: Icon, value, label, iconColor = "#fc1474" }) => (
  <div className="flex items-center gap-2.5">
    <Icon size={17} style={{ color: iconColor, flexShrink: 0 }} />
    <div>
      <div
        className="font-black text-sm leading-tight"
        style={{ color: "#ffffff" }}
      >
        {value}
      </div>
      <div
        className="text-[10px] uppercase tracking-widest leading-tight mt-0.5"
        style={{ color: "#888888" }}
      >
        {label}
      </div>
    </div>
  </div>
);

export default StatItem;
