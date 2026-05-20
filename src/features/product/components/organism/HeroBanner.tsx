import { Button } from "@/shared/components/atoms/Button";
import heroImage from "@/assets/models/hero_image.png";
import { Globe } from "lucide-react";
import { Span } from "@/shared/components/atoms/Span";
import { SubTitle } from "@/shared/components/atoms/SubTitle";

export const HeroBanner = () => {
  return (
    <section className="text-text-primary w-full relative overflow-hidden bg-radial-[at_25%_25%] from-primary to-accent-blue/20 to-85% flex flex-col sm:flex-row min-h-55 sm:min-h-85">
      <div className="z-10 relative flex flex-col gap-3 sm:gap-5 p-6 sm:p-8 sm:pb-8 w-full sm:w-1/2 justify-center">
        <SubTitle>
          BUILT DIFFERENT. <Globe className="w-4 h-4 sm:w-5 sm:h-5" />
        </SubTitle>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight uppercase">
          <span className="text-text-primary block">MADE TO</span>
          <span className="text-accent-pink block">STAND OUT.</span>
        </h1>

        <div className="flex flex-col gap-1">
          <Span>StreetWear that speaks louder than words.</Span>
          <Span>No rules. No limits.</Span>
        </div>

        <div className="flex flex-wrap items-center gap-3 mt-1">
          <Button
            color="primary"
            className="text-sm sm:text-base px-5 py-2 sm:px-6 sm:py-2.5"
          >
            Shop Now ↗
          </Button>
          <Button
            color="secondary"
            className="text-sm sm:text-base px-5 py-2 sm:px-6 sm:py-2.5 border border-text-primary/30 hover:border-text-primary/60"
          >
            Explore Drops
          </Button>
        </div>
      </div>

      <div className="absolute h-full right-10 sm:relative sm:w-1/2 sm:h-auto shrink-0">

        <img
          src={heroImage}
          alt="Model wearing URBN streetwear"
          className="
            w-full h-full object-cover object-right scale-130
            sm:relative
            sm:object-right sm:scale-110 sm:origin-right
            opacity-80 sm:opacity-100 lg:origin-bottom lg:w-full
          "
        />
      </div>
    </section>
  );
};
