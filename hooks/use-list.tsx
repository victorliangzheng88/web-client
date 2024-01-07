import { create } from "zustand";

import getImageList from "@/actions/get-list";
import { ImageType } from "@/types";
import toast from "react-hot-toast";

interface ImageListStore {
  items: ImageType[];
  setImportant: (id: string, important: boolean) => void;
}

const useImageList = create<ImageListStore>((set) => ({
  items: [],
  setImportant: (id: string, important: boolean) => {
    set((state) => ({
      items: state.items.map((item) =>
        item.id === id ? { ...item, important } : item
      ),
    }));
    toast.success(important ? "Marked as important" : "Marked as unimportant");
  },
}));

const fetchData = async () => {
  try {
    const initialData = await getImageList();
    useImageList.setState({ items: initialData });
  } catch (error) {
    console.error("Error fetching initial data:", error);
  }
};

fetchData();

export default useImageList;
