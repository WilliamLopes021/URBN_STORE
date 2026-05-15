import type { MediaViewModel } from "@/application/interfaces/view-models/media.viewmodel";
import { ImageRenderer } from "./ImageRenderer";
import { VideoRenderer } from "./VideoRenderer";
import { EmbedRenderer } from "./EmbedRenderer";

export const MediaRenderer = ({ media }: { media: MediaViewModel }) => {
  return (
    <>
      {media.type === "embed" ? (
        <EmbedRenderer media={media} />
      ) : media.type === "video" ? (
        <VideoRenderer media={media} />
      ) : (
        <ImageRenderer media={media} />
      )}
    </>
  );
};
