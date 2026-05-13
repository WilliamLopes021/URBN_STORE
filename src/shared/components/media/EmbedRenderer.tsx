import type { MediaViewModel } from "@/application/interfaces/view-models/media.viewmodel";

export const EmbedRenderer = ({ media }: { media: MediaViewModel }) => {
  return <iframe src={media.url} title={media.alt || media.id} className="w-full h-full object-cover" />;
};