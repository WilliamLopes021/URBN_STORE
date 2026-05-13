export type MediaType = "image" | "video" | "embed";

export interface MediaViewModel {
  id: string;
  type: MediaType;
  url: string;
  alt?: string;
}
