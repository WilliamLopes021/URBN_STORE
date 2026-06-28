import { Button } from "@/shared/components/atoms/Button";
import heroImage from "@/assets/models/hero_image.png";
import { Globe } from "lucide-react";
import { Span } from "@/shared/components/atoms/Span";
import { SubTitle } from "@/shared/components/atoms/SubTitle";
import { useRouter } from "@/interfaces/router/useRouter";

export const HeroBanner = () => {
  const navigate = useRouter();

  return (
    <section
      className={
        "text-text-primary w-full relative overflow-hidden bg-radial-[at_25%_25%] from-primary to-accent-blue/20 to-85% flex flex-col sm:flex-row min-h-55 sm:min-h-[340px]"
      }
    >
      <div className="absolute inset-0 sm:inset-auto sm:relative sm:flex-1 sm:overflow-hidden">
        <img
          src={heroImage}
          alt="Model wearing URBN streetwear"
          className="w-full h-full object-cover object-center sm:object-[center_top] opacity-20 sm:opacity-100"
        />
        <div className="absolute inset-0 bg-linear-to-r from-background/75 via-background/60 to-transparent sm:from-background/30 sm:via-background/30 sm:to-transparent" />
      </div>

      <div className="z-10 relative flex flex-col gap-3 sm:gap-5 p-6 sm:p-8 sm:pb-8 w-full sm:w-[45%] sm:order-first justify-center">
        <SubTitle>
          BUILT DIFFERENT. <Globe className="w-4 h-4 sm:w-5 sm:h-5" />
        </SubTitle>

        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black leading-tight uppercase">
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
            onClick={() => navigate("/shop")}
          >
            Shop Now ↗
          </Button>
          <Button
            color="secondary"
            className="text-sm sm:text-base px-5 py-2 sm:px-6 sm:py-2.5 border border-text-primary/30 hover:border-text-primary/60"
          >
            <a href="#drops">Explore Drops</a>
          </Button>
        </div>
      </div>
    </section>
  );
};
