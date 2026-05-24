export const Avatar = ({ src, alt }: {src: string, alt: string}) => (
  <div
    className="border-3 shadow-md shadow-accent-pink/50 border-accent-pink size-[160px] rounded-full overflow-hidden"
  >
    <img
      src={src}
      alt={alt}
      className="w-full h-full object-cover"
      draggable={false}
    />
  </div>
);