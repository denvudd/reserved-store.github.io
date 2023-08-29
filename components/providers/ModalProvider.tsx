"use client";

import React from "react";
import PreviewModal from "../modals/PreviewModal";
import { useIsComponentMounted } from "@/hooks/use-is-component-mounted";

const ModalProvider: React.FC = ({}) => {
  const { isMounted } = useIsComponentMounted();

  if (!isMounted) return null;

  return <PreviewModal />;
};

export default ModalProvider;
