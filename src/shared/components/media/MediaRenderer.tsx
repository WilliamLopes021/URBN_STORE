import type { MediaViewModel } from "@/application/interfaces/view-models/media.viewmodel";
import { ImageRenderer } from "./ImageRenderer";
import { VideoRenderer } from "./VideoRenderer";
import { EmbedRenderer } from "./EmbedRenderer";

export const MediaRenderer = ({ media }: { media: MediaViewModel }) => {
  return (
    <>
      {media.type === "image" ? (
        <ImageRenderer media={media} />
      ) : media.type === "video" ? (
        <VideoRenderer media={media} />
      ) : (
        <EmbedRenderer media={media} />
      )}
    </>
  );
};
