import ImageCard from "@/components/image-card";
import NoResults from "@/components/no-results";
import { ImageType } from "@/types";

interface ImageListProps {
  title: string;
  items: ImageType[];
}

const ImageList: React.FC<ImageListProps> = ({ title, items }) => {
  return (
    <div className="space-y-4">
      <h3 className="mt-8 mb-2 font-bold text-3xl">{title}</h3>
      <hr />
      {items.length === 0 && <NoResults />}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {items.map((item) => (
          <ImageCard key={item.id} data={item} />
        ))}
      </div>
    </div>
  );
};

export default ImageList;
