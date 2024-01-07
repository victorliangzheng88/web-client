"use client";

import Container from "@/components/container";
import Info from "@/components/info";
import useImageList from "@/hooks/use-list";
import Image from "next/image";
import { useEffect, useState } from "react";

interface ImagePageProps {
  params: {
    imageId: string;
  };
}

const ImagePage: React.FC<ImagePageProps> = ({ params }) => {
  const imageList = useImageList();

  const image = imageList.items.find((item) => item.id === params.imageId);

  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    // Render a loading indicator or message while data is being fetched
    return <div>Loading...</div>;
  }

  if (!image) {
    // Handle the case where the image is not found
    return <div>Image not found</div>;
  }

  return (
    <div className="bg-white">
      <Container>
        <div className="px-2 py-10 sm:px-4 lg:px-10">
          <div>
            <Image
              src={image.download_url}
              alt={image.author}
              width={image.width}
              height={image.height}
              className="aspect-auto object-cover rounded-md mb-4"
              priority
              quality={100}
            />
            <div className="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
              <Info data={image} />
            </div>
          </div>
          <hr className="my-10" />
        </div>
      </Container>
    </div>
  );
};

export default ImagePage;
