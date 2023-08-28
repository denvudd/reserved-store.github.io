import React from "react";
import { type Billboard as BillboardType } from "@/types";

interface BillboardProps {
  billboard: BillboardType;
  labelRequired?: boolean;
}

const Billboard: React.FC<BillboardProps> = ({
  billboard,
  labelRequired = true,
}) => {
  return (
    <div className="p-4 sm:p-6 lg:p-8 rounded-xl overflow-hidden">
      <div
        className="rounded-xl relative aspect-square md:aspect-[2.4/1] overflow-hidden bg-cover"
        style={{ backgroundImage: `url(${billboard?.imageUrl})` }}
      >
        {labelRequired && (
          <div className="h-full w-full flex flex-column justify-center items-center text-center gap-y-8">
            <div className="font-bold text-3xl sm:text-5xl lg:text-6xl sm:max-w-xl max-w-xs">
              {billboard.label}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Billboard;
