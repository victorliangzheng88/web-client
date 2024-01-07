import { ImageType } from "@/types";

const API_URL = "https://picsum.photos/v2/list";

// Function to fetch image data from the API
const getImageList = async (): Promise<ImageType[]> => {
  try {
    const response = await fetch(API_URL);

    if (!response.ok) {
      throw new Error(`Failed to fetch data. Status: ${response.status}`);
    }

    const apiResponse = await response.json();

    // Add the 'important' field with a default value of 'false' to each image
    const imagesWithImportantField: ImageType[] = apiResponse.map(
      (image: ImageType) => ({
        ...image,
        important: false,
      })
    );

    return imagesWithImportantField;
  } catch (error) {
    console.error("Error fetching image data:", error);
    throw error;
  }
};

export default getImageList;
