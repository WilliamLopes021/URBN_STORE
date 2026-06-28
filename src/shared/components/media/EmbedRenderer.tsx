import type { MediaViewModel } from "@/interfaces/view-models/media.viewmodel";

export const EmbedRenderer = ({ media }: { media: MediaViewModel }) => {
  return (
    <iframe
      src={media.url}
      title={media.alt || media.id}
      className="w-full h-full object-cover"
      loading="lazy"
      
    />
  );
};
