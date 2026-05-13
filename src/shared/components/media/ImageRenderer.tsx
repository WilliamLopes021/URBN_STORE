import type { MediaViewModel } from "@/application/interfaces/view-models/media.viewmodel";

export const ImageRenderer = ({ media }: { media: MediaViewModel }) => {
  return <img src={media.url} alt={media.alt || media.id} className="w-full h-full object-cover" />;
};