import { ArrowRight } from "lucide-react";

const SidebarBanner = ({ onShopNow }) => {
  return (
    <div className="mx-3 p-4 rounded-sm border border-accent-pink/50 bg-dark-gray/20">
      <p className="font-black text-xs uppercase tracking-wider mt-2 leading-snug text-text-primary">
        Built Different.
        <br />
        No Rules. No Limits.
      </p>
      <button
        onClick={onShopNow}
        className="flex items-center gap-1 text-[10px] font-black uppercase tracking-widest mt-3 transition-opacity cursor-pointer text-accent-pink hover:text-accent-pink/80"
      >
        Shop Now <ArrowRight size={11} />
      </button>
    </div>
  );
};

export default SidebarBanner;
