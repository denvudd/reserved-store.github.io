"use client";

import { usePreviewModal } from "@/hooks/use-preview-modal";
import React from "react";
import Modal from "../ui/Modal";
import Gallery from "../gallery/Gallery";
import ProductInfo from "../ProductInfo";

const PreviewModal: React.FC = ({}) => {
  const { isOpen, onClose, onOpen } = usePreviewModal();
  const product = usePreviewModal((state) => state.product);

  if (!product) return null;

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="grid w-full grid-cols-1 gap-x-6 items-start gap-y-8 sm:grid-cols-12 lg:gap-x-8">
        <div className="sm:col-span-4 lg:col-span-5">
          <Gallery productName={product.name} images={product.images} />
        </div>
        <div className="sm:col-span-8 lg:col-span-7">
          <ProductInfo product={product} />
        </div>
      </div>
    </Modal>
  );
};

export default PreviewModal;
