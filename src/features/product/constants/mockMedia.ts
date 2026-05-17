import type { MediaViewModel } from "@/application/interfaces/view-models/media.viewmodel";
import cap from "@/assets/products/urbn_product_cap.png";
import shoes from "@/assets/products/urbn_product_joggers.png";
import merchan from "@/assets/videos/template.mp4";

export const mockMedia: MediaViewModel[] = [
  {
    id: "1",
    type: "image",
    url: cap,
    alt: "Product Image 1",
    thumb: cap,
  },
  {
    id: "2",
    type: "video",
    url: merchan,
    alt: "Product Video",
    thumb: shoes,
  },
  {
    id: "3",
    type: "video",
    url: merchan,
    alt: "Product Video",
    thumb: cap,
  },
  {
    id: "4",
    type: "embed",
    url: "https://www.youtube.com/watch?v=HT5POUImqis&list=RDHT5POUImqis&start_radio=1",
    alt: "Product Embed",
    thumb: shoes,
  },
];
