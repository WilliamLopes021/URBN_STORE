import { ItemsSelector } from "../atoms/ItemsSelector";

export const DisplayProductImage = ({ images }: { images: string[] }) => {
  return (
    <section className="px-8 bg-radial-[at_25%_25%] from-primary to-accent-blue/20 to-45% relative overflow-hidden">
      <div className="scale-125 ">
        <img src={images[0]} alt="" className="w-full object-cover" />
      </div>
      <div className="absolute bottom-0 right-0 w-full overflow-hidden">
        <ItemsSelector length={images.length} activeIndex={0} />
      </div>
    </section>
  );
};
