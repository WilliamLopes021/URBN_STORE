export const CategoryTitle = ({
  children,
  titleColor,
}: {
  children: string;
  titleColor?: string;
}) => {
  const words = children.split(" ");
  return (
    <div className="text-text-primary text-[clamp(2.5rem,8vw,6rem)] leading-none uppercase tracking-wider font-bold">
      <h2 className={`${titleColor}`}>{words[0]}</h2>
      <span>{words.slice(1).join(" ")}</span>
    </div>
  );
};
