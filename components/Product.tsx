import React from "react";
import { CustomImage } from "../components/CustomImage";
import Link from "next/link";

interface PlantProductsType {
  id: string;
  title: string;
  price: string;
  images: string;
}
export const Product: React.FC<PlantProductsType> = ({
  id,
  title,
  price,
  images,
}) => {
  return (
    <div>
      <Link href={`/${id}`} className="w-[258px] inline-block">
        <div className="bg-[#FBFBFB] pt-[31px] pb-[19px] pl-[4px] pr-[4px]">
          <CustomImage
            src={images}
            alt="Product Image"
            width={250}
            height={250}
          />
        </div>
      </Link>
      <h2 className="text-[16px] leading-[16px] text-[#3D3D3D] mt-[12px] mb-[6px]">
        {title}
      </h2>
      <p className="text-[#46A358] text-[18px] leading-[16px]">{price}</p>
    </div>
  );
};
