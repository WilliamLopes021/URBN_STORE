import { Button } from "@/shared/components/atoms/Button";
import heroImage from "@/assets/models/hero_image.png";
import crownImage from "@/assets/icons/urbn_crown_icon.png";
import { Globe } from "lucide-react";
import { Span } from "@/shared/components/atoms/Span";
import { SubTitle } from "@/shared/components/atoms/SubTitle";

export const HeroBanner = () => {
  return (
    <section className="text-text-primary text-xl w-full relative overflow-hidden p-8 bg-radial-[at_25%_25%] from-primary to-accent-blue/20 to-85% ">
      <div className="z-10 relative w-3/4 flex flex-col gap-5">
        <SubTitle>
          BUILT DIFFERENT. <Globe />
        </SubTitle>
        <h1 className="text-4xl font-bold text-accent-pink">
          MADE TO STAND OUT.
        </h1>
        <Span>StreetWear that speaks louder than words.</Span>
        <Span>No rules. No limits.</Span>
        <div>
          <Button color="primary">Shop Now</Button>
        </div>
      </div>

      <div className="absolute w-full -right-30 top-0 opacity-70">
        <img src={heroImage} alt="" className="w-full h-full object-cover" />
        <img
          src={crownImage}
          alt=""
          className="w-1/4 object-cover absolute top-0 right-90 -rotate-45"
        />
      </div>
    </section>
  );
};
