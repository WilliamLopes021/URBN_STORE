const variantStyles = {
  shipped: { background: "#fc1474", color: "#fff" },
  primary: { background: "#fc1474", color: "#fff" },
  default: { background: "#295fee", color: "#fff" },
  outline: {
    background: "transparent",
    color: "#fc1474",
    border: "1px solid #fc1474",
  },
  muted: {
    background: "#2a2a2a",
    color: "#cccccc",
    border: "1px solid #333333",
  },
};

const Badge = ({ children, variant = "default", className = "" }) => {
  const style = variantStyles[variant] ?? variantStyles.default;
  return (
    <span
      className={`inline-flex items-center text-[10px] font-black uppercase tracking-widest px-2 py-0.5 rounded-sm ${className}`}
      style={style}
    >
      {children}
    </span>
  );
};

export default Badge;
