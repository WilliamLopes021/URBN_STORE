import { ArrowRight } from "lucide-react";
import { Card } from "@/shared/components/atoms/Card";
import img1 from "@/assets/models/image.png";
import img2 from "@/assets/models/urbn_model_female_2.png";
import img3 from "@/assets/models/urbn_model_male_1.png";
import img4 from "@/assets/models/urbn_model_male_2.png";
import { Span } from "@/shared/components/atoms/Span";

const Drops = () => {
  return (
    <section>
      <header className="flex justify-between px-8 my-5">
        <h2 className="text-xl font-bold text-text-primary">Lançamentos</h2>
        <div>
          <Span>
            VIEW ALL <ArrowRight />
          </Span>
        </div>
      </header>
      <div className="flex flex-col gap-3 px-8">
        <Card text={"Urban fit shirt"} price={"R$78,90"} image={img1} />
        <Card text={"Urban fit shirt"} price={"R$78,90"} image={img2} />
        <Card text={"Urban fit shirt"} price={"R$78,90"} image={img3} />
        <Card text={"Urban fit shirt"} price={"R$78,90"} image={img4} />
      </div>
    </section>
  );
};

export default Drops;
