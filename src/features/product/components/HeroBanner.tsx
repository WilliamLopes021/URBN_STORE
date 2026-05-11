import { Button } from "@/shared/components/atoms/Button";
import heroImage from "@/assets/models/hero_image.png";

export const HeroBanner = () => {
  return (
    <section>
      <span>Built different. </span>
      <h1>MADE TO STAND OUT.</h1>
      <p>StreetWear that speaks louder than words. No rules. No limits.</p>
      <Button color="primary">Shop Now</Button>
      <div className="relative">
        <img src={heroImage} alt="" className="w-full" />
      </div>
    </section>
  );
};
