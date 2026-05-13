import type { MediaViewModel } from "@/application/interfaces/view-models/media.viewmodel";
import { MediaRenderer } from "@/shared/components/media/MediaRenderer";
import { Ellipsis, Heart, Share2 } from "lucide-react";
import logo from "@/assets/icons/urbn_icon_skull_neon.png";

type ModalController = {
  isOpen: boolean;
  onClose: () => void;
};

type ModalProps = {
  modalController: ModalController;
  productId: string;
  medias: MediaViewModel[];
  description: string;
  price: number;
};

export const ProductModal = ({
  modalController,
  // productId,
  medias,
  description,
}: ModalProps) => {
  return modalController.isOpen ? (
    <div className={`relative border boder-dark-gray overflow-x-hidden`}>
      {medias.map((media) => {
        return <MediaRenderer media={media} key={media.id} />;
      })}
    </div>
  ) : (
    <div>
      <div className={`flex w-full justify-between items-center`}>
        <div>
          <img
            src={logo}
            alt="Logo"
            className={`rounded-full w-full- h-full`}
          />
          <p
            className={`text-sm font-bold text-accent-blue shadow-sm shadow-accent-blue`}
          >
            URBN-STORE
          </p>
        </div>
        <Ellipsis className={`text-text-primary`} />
      </div>
      {medias.map((media) => {
        return <MediaRenderer media={media} key={media.id} />;
      })}
      <div>
        <div
          className={`flex w-full justify-between items-center px-4 py-2`}
        >
          <p className={`text-xs font-bold text-text-primary`}>
            {description}
          </p>
          <div className={`flex w-full justify-end items-center gap-3`}>
            <Share2 className={`text-text-primary`} />
            <Heart className={`text-text-primary`} />
          </div>
        </div>
      </div>
    </div>
  );
};
