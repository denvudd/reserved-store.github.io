"use client";

import React from "react";
import { Toaster } from "sonner";

const ToastProvider: React.FC = () => {
  return <Toaster expand richColors />;
};

export default ToastProvider;
