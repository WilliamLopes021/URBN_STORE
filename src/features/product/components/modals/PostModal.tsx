import type { MediaViewModel } from "@/interfaces/view-models/media.viewmodel";
import { MediaRenderer } from "@/shared/components/media/MediaRenderer";
import { Ellipsis, Heart, Share2 } from "lucide-react";
import logo from "@/assets/icons/urbn_icon_skull_neon.png";
import { Span } from "@/shared/components/atoms/Span";
import { ModalBase } from "@/shared/components/modal/ModalBase";

type ModalProps = {
  productId: string;
  onClose: () => void;
  media: MediaViewModel;
  description: string;
  price: number;
  isOpen: boolean;
} & React.ComponentProps<"div">;

export const PostModal = ({
  productId,
  onClose,
  media,
  description,
  isOpen,
}: ModalProps) => {
  console.log(productId);
  if (!isOpen) return null;

  return (
    <ModalBase onClose={() => onClose()}>
      <div
        onClick={(e) => e.stopPropagation()}
        className={`flex w-full max-w-[450px] justify-between items-center px-4 py-2 bg-card-bg`}
      >
        <div className="flex items-center gap-2">
          <img src={logo} alt="Logo" className={`rounded-full w-10 h-10`} />
          <div className="w-full flex flex-col gap-1">
            <p
              className={`text-sm font-bold text-nowrap w-min text-accent-blue`}
            >
              URBN-STORE
            </p>
            <Span>São Paulo, Brasil</Span>
          </div>
        </div>
        <Ellipsis className={`text-text-primary`} />
      </div>
      <div
        className="w-full h-full max-h-100 max-w-[450px]"
        onClick={(e) => e.stopPropagation()}
      >
        <MediaRenderer media={media} />
        <div
          className={`flex w-full justify-between items-center px-4 py-2 bg-card-bg`}
        >
          <p className={`text-xs font-bold text-text-primary`}>{description}</p>
          <div className={`flex w-full justify-end items-center gap-3`}>
            <Share2 className={`text-text-primary`} />
            <Heart className={`text-text-primary`} />
          </div>
        </div>
      </div>
    </ModalBase>
  );
};
