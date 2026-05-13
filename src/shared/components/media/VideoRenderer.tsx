import type { MediaViewModel } from "@/application/interfaces/view-models/media.viewmodel";

export const VideoRenderer = ({ media }: { media: MediaViewModel }) => {
  return (
    <video src={media.url} className="w-full h-full object-cover">
      <source src={media.url} type="video/mp4" />
    </video>
  );
};
