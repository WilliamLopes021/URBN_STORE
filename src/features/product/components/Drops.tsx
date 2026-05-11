import { ArrowRight } from "lucide-react";
import { Card } from "@/shared/components/atoms/Card";
import img1 from "@/assets/models/image.png";
import img2 from "@/assets/models/urbn_model_female_2.png";
import img3 from "@/assets/models/urbn_model_male_1.png";
import img4 from "@/assets/models/urbn_model_male_2.png";

const Drops = () => {
  return (
    <section>
      <h2>Lançamentos</h2>
      <div>
        <span>
          VIEW ALL <ArrowRight />
        </span>
      </div>
      <div className="flex flex-row ">
        <Card text={"Urban fit shirt"} price={"R$78,90"} image={img1} />
        <Card text={"Urban fit shirt"} price={"R$78,90"} image={img2} />
        <Card text={"Urban fit shirt"} price={"R$78,90"} image={img3} />
        <Card text={"Urban fit shirt"} price={"R$78,90"} image={img4} />
      </div>
    </section>
  );
};

export default Drops;
