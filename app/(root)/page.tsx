"use client";

import Container from "@/components/container";
import ImageList from "@/components/image-list";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import useImageList from "@/hooks/use-list";
import { useEffect, useState } from "react";

const HomePage = () => {
  // State for component mounting status
  const [isMounted, setIsMounted] = useState(false);

  // State for filtering images
  const [important, setImportant] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const imageList = useImageList();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return <div>Loading...</div>;
  }

  // Filtered items based on important status and search query
  const filteredItems = imageList.items.filter((item) => {
    return (
      (important ? item.important : true) &&
      (searchQuery.trim() === "" ||
        item.author.toLowerCase().includes(searchQuery.toLowerCase()))
    );
  });

  return (
    <>
      <Container>
        <div className="flex flex-col lg:flex-row gap-4 p-4 m-2 text-sm">
          <Button
            onClick={() => setImportant(true)}
            aria-label="Show Important Only"
          >
            Show Important Only
          </Button>
          <Button onClick={() => setImportant(false)} aria-label="Show All">
            Show All
          </Button>
          <div className="w-full sm:grid lg:w-auto">
            <Input
              type="text"
              placeholder="Search by author..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="border p-2"
              aria-label="Search by author"
            />
          </div>
        </div>
        <div className="space-y-10 pb-10">
          <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
            <ImageList
              title={`Images ${important ? "(Important)" : "(All)"}`}
              items={filteredItems}
            />
          </div>
        </div>
      </Container>
    </>
  );
};

export default HomePage;
