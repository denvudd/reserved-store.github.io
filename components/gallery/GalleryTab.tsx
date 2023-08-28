import { type ProductImage } from "@/types";
import React from "react";
import { Tab } from "@headlessui/react";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface GalleryTabProps {
  image: ProductImage;
  productName: string;
}

const GalleryTab: React.FC<GalleryTabProps> = ({ image, productName }) => {
  return (
    <Tab className="relative flex aspect-square cursor-pointer items-center justify-center rounded-md bg-white">
      {({ selected }) => (
        <div>
          <span className="absolute h-full w-full aspect-square inset-0 overflow-hidden rounded-md">
            <Image
              fill
              src={image.url}
              alt={`${productName} Reserved`}
              className="object-cover object-center"
            />
          </span>
          <span
            className={cn(
              "absulute inset-0 rounded-md ring-2 ring-offset-2",
              selected ? "ring-black" : "ring-transparent"
            )}
          ></span>
        </div>
      )}
    </Tab>
  );
};

export default GalleryTab;
