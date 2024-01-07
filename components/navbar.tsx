"use client"

import Container from "@/components/container";
import { X } from 'lucide-react';
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const path = usePathname();
  const isImagePage = path.startsWith("/image/");

  return (
    <div className="border-b">
      <Container>
        <div className="relative px-4 sm:px-6 lg:px-8 flex h-16 items-center">
          <Link href="/" className="ml-4 flex lg:ml-0 gap-x-2">
            <p className="font-bold text-xl">HOME</p>
          </Link>
          {isImagePage && (
            <Link href="/" className="flex ml-auto gap-x-2">
              <X />
            </Link>
          )}
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
