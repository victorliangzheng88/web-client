"use client";

import Image from "next/image";

import { Button } from "@/components/ui/button";
import useImageList from "@/hooks/use-list";
import { ImageType } from "@/types";
import { useRouter } from "next/navigation";

interface ImageCard {
  data: ImageType;
}

const ImageCard: React.FC<ImageCard> = ({ data }) => {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/image/${data?.id}`);
  };
  const imageList = useImageList();

  const onAddToImportant = () => {
    imageList.setImportant(data.id, true);
  };

  const onRemoveFromImportant = () => {
    imageList.setImportant(data.id, false);
  };

  return (
    <div className="bg-white rounded-xl border p-3 space-y-4">
      <div
        onClick={handleClick}
        className="aspect-video rounded-xl cursor-pointer bg-gray-100 relative"
      >
        <Image
          src={data.download_url}
          alt={data.author}
          fill
          className="aspect-auto rounded-md"
          priority
        />
      </div>
      <div>
        <p className="text-center font-semibold text-lg">{data.author}</p>
        <div className="mt-2 grid grid-flow-col mx-auto gap-4 max-w-[200px]">
          {data.important ? (
            <Button size="sm" onClick={onRemoveFromImportant} variant="outline" aria-label="Mark as unimportant">
              Mark Unimportant
            </Button>
          ) : (
            <Button size="sm" onClick={onAddToImportant} aria-label="Mark as important">
              Mark Important
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ImageCard;
