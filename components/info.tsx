"use client";

import { Button } from "@/components/ui/button";
import useImageList from "@/hooks/use-list";
import { ImageType } from "@/types";

interface InfoProps {
  data: ImageType;
}

const Info: React.FC<InfoProps> = ({ data }) => {
  const imageList = useImageList();

  const onAddToImportant = () => {
    imageList.setImportant(data.id, true);
  };

  const onRemoveFromImportant = () => {
    imageList.setImportant(data.id, false);
  };

  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-900">
        Author: {data.author}
      </h1>
      <div className="mt-10 flex items-center gap-x-3">
        <div className="flex items-center gap-x-2">
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

export default Info;
