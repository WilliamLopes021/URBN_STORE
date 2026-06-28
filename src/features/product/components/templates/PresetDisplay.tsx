export const PresetDisplay = ({
  image,
  children,
}: {
  children?: React.ReactNode;
  image: string;
}) => {
  return (
    <section className={`bg-[url(${image})] bg-cover bg-center w-screen h-screen`}>
      {children}
    </section>
  );
};
