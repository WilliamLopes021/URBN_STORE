import { ArrowRight } from "lucide-react";
import { Button } from "../atoms/Button";
import { CheckBox } from "../atoms/CheckBox";
import { Input } from "../atoms/Input";
import { SubTitle } from "../atoms/SubTitle";

export const NewsletterSection = () => {
  return (
    <section
      id="contact"
      className="bg-surface border border-dark-gray w-full px-6 py-10 relative overflow-hidden text-text-primary"
    >
      <div className="mb-4 leading-none">
        <p className="text-text-primary li font-black text-4xl italic tracking-tight">
          Join the
        </p>
        <p className="text-accent-pink font-black text-5xl uppercase tracking-tight leading-none">
          Revolution.
        </p>
      </div>

      <div className="mb-5 tracking-wider">
        <SubTitle>
          Get exclusive drops, early access and chaos delivered to your inbox.
        </SubTitle>
      </div>

      <form className="flex flex-col gap-4">
        <div className="flex gap-0">
          <Input type="email" placeholder="Enter your email" required />
          <Button color="primary" type="submit" className="whitespace-nowrap">
            Sign Up <ArrowRight size={16} />
          </Button>
        </div>

        <label className="flex items-center gap-2 cursor-pointer">
          <CheckBox />
          <p className="text-white font-thin">
            I agree to receive URBN updates and offers.
          </p>
        </label>
      </form>
    </section>
  );
};
