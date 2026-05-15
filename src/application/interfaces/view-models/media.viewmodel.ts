export type MediaType = "image" | "video" | "embed";

export interface MediaViewModel {
  id: string;
  thumb: string;
  type: MediaType;
  url: string;
  alt?: string;
}
