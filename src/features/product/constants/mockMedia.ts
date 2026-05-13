import type { MediaViewModel } from "@/application/interfaces/view-models/media.viewmodel";
import cap from '@/assets/products/urbn_product_cap.png'
import merchan from '@/assets/videos/balacante.mp4'

export const mockMedia: MediaViewModel[] = [
  {
    id: "1",
    type: "image",
    url: cap,
    alt: "Product Image 1",
  },
  {
    id: "2",
    type: "video",
    url: merchan,
    alt: "Product Video",
  },
  {
    id: "3",
    type: "embed",
    url: "https://www.youtube.com/watch?v=HT5POUImqis&list=RDHT5POUImqis&start_radio=1",
    alt: "Product Embed",
  },
];