export const PresetDisplay = ({
  image,
  children,
}: {
  children?: React.ReactNode;
  image: string;
}) => {
  return (
    <section
      className={`w-screen h-screen flex items-center justify-center gap-5 bg-cover bg-center relative overflow-hidden lg:justify-between p-4`}
      style={{
        backgroundImage: `url(${image})`,
      }}
    >
      {children}
    </section>
  );
};
