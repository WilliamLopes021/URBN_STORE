import { ItemsSelector } from "./ItemsSelector";

export const DisplayProductImage = ({ image }: { image: string }) => {
  return (
    <section className="px-8 bg-radial-[at_25%_25%] from-primary to-accent-blue/20 to-45% relative overflow-hidden">
      <div className="scale-125 ">
        <img src={image} alt="" className="w-full object-cover" />
      </div>
      <div className="absolute bottom-0 right-0 w-full overflow-hidden">
        <ItemsSelector />
      </div>
    </section>
  );
};
