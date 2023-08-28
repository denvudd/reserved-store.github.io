import { cn } from "@/lib/utils";
import React from "react";

interface IconButtonProps {
  icon: React.ReactElement;
  onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
  className?: string;
}

const IconButton: React.FC<IconButtonProps> = ({
  icon,
  className,
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        "rounded-full flex items-center justify-center bg-white border shadow-md p-2 hover:scale-110 transition",
        className
      )}
    >
      {icon}
    </button>
  );
};

export default IconButton;
