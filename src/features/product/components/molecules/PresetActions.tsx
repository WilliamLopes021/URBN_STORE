import { Heart } from "lucide-react";

export const PresetActions = () => {
  return (
    <div className=" hidden lg:flex gap-6 text-white absolute bottom-2 left-10">
      
      <button className="flex flex-col items-center gap-2 hover:opacity-80 transition-opacity">
        <Heart size={28} strokeWidth={1.5} />
        <span className="text-[10px] tracking-widest uppercase">Favoritos</span>
      </button>
    </div>
  );
};
