export const Avatar = ({ src, alt = "Avatar" }) => (
  <div
    className="border-3 shadow-md shadow-accent-pink/50 border-accent-pink size-[96px] rounded-full overflow-hidden shrink-0"
  >
    <img
      src={src}
      alt={alt}
      className="w-full h-full object-cover"
      draggable={false}
    />
  </div>
);

