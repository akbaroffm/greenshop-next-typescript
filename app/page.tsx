"use client";
import HeroMobile from "@/components/HeroCarusel/HeroMobile";
import HeroCarusel from "../components/HeroCarusel";
import { RangeSlider } from "@/components/RangeSlider";
import Link from "next/link";
import { useEffect, useState } from "react";
import axios from "axios";
import { URL } from "../service/request";
import { Product } from "@/components/Product";
import { Pagination } from "antd";
import Image from "next/image";
import SummerCom from "@/components/SummerCom";

interface Categories {
  id: string;
  title: string;
  count: string;
}

interface PlantProductsType {
  id: string;
  title: string;
  price: string;
  images: string;
}

function Home() {
  const [category, setCategory] = useState<Array<Categories>>([]);
  const [size, setSize] = useState<Array<Categories>>([]);
  const [tagNavbar, setTagNavbar] = useState<Array<Categories>>([]);
  const [plantProducts, setPlantProduct] = useState<Array<PlantProductsType>>(
    []
  );

  const [isLoading, setIsLoading] = useState(false);
  const [categoriesId, setCategoriesId] = useState<string>("");
  const [tagNavbarId, setTagNavbarId] = useState<string>("1");

  const handleClickCategories = (id: string) => {
    setIsLoading(true);
    setTagNavbarId("1");
    setTimeout(() => {
      setCategoriesId(id);
    }, 500);
  };

  const handleTagNavbarIdClick = (id: string) => {
    setCategoriesId("");
    setIsLoading(true);
    setTimeout(() => {
      setTagNavbarId(id);
    }, 500);
  };

  useEffect(() => {
    axios.get(`${URL}/categoryies`).then((res) => {
      setCategory(res.data);
    });
    axios.get(`${URL}/sizes`).then((res) => {
      setSize(res.data);
    });
    axios.get(`${URL}/tag-navbar`).then((res) => {
      setTagNavbar(res.data);
    });
  }, []);

  useEffect(() => {
    axios
      .get(
        `${URL}/plant-products?categoryId=${categoriesId}&tagId=${tagNavbarId}`
      )
      .then((res) => {
        setIsLoading(false);
        setPlantProduct(
          res.data.map((item: any) => {
            return {
              id: item.id,
              title: item.title,
              price: item.price,
              images: item.images[0],
            };
          })
        );
      })
      .catch((error) => {
        setIsLoading(false);
      });
  }, [categoriesId, tagNavbarId]);

  return (
    <>
      <section className="pt-[12px] pb-[46px]">
        <div className="container px-5 md:px-0">
          <HeroCarusel />
          <HeroMobile />
        </div>
      </section>
      <section>
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between gap-x-[50px] gap-y-[30px]">
            <div className="w-full md:w-[310px] bg-[#FBFBFB]">
              <div className="p-[15px]">
                <h2 className="font-bold text-[18px] leading-[16px]">
                  Categories
                </h2>
                <ul className="pl-[12px] space-y-[15px] mt-[20px] mb-[36px]">
                  {category &&
                    Array.isArray(category) &&
                    category.length > 0 &&
                    category.map((item: Categories) => (
                      <li
                        onClick={() => handleClickCategories(item.id)}
                        className={`flex items-center justify-between cursor-pointer ${
                          categoriesId == item.id
                            ? "text-[#46A358] font-bold"
                            : ""
                        }`}
                        key={item.id}
                      >
                        <span>{item.title}</span>
                        <span>({item.count})</span>
                      </li>
                    ))}
                </ul>
                <h2 className="font-bold text-[18px] leading-[16px]">
                  Price Range
                </h2>
                <RangeSlider />
                <h2 className="font-bold text-[18px] leading-[16px] mt-[46px]">
                  Size
                </h2>
                <ul className="pl-[12px] space-y-[15px] mt-[20px] mb-[36px]">
                  {size &&
                    Array.isArray(size) &&
                    size.length > 0 &&
                    size.map((item: Categories) => (
                      <li
                        className="flex items-center justify-between"
                        key={item.id}
                      >
                        <span>{item.title}</span>
                        <span>({item.count})</span>
                      </li>
                    ))}
                </ul>
              </div>
              <Link href={"#"}>
                <Image
                  src="/Super-Sale.png"
                  alt="Plant"
                  width={310}
                  height={470}
                  priority={true}
                  className="mx-auto"
                />
              </Link>
            </div>
            <div className="w-full md:w-[840px]">
              <div className="flex flex-col md:flex-row items-center justify-between">
                <ul className="flex items-center space-x-[37px] mb-[20px] md:mb-0">
                  {tagNavbar.map((item) => (
                    <li
                      className={` cursor-pointer ${
                        tagNavbarId == item.id
                          ? "text-[#46A358] font-semibold border-b-[3.5px] pb-[7px] border-[#46A358]"
                          : ""
                      }`}
                      onClick={() => handleTagNavbarIdClick(item.id)}
                      key={item.id}
                    >
                      {item.title}
                    </li>
                  ))}
                </ul>
                <div>
                  <h2 className="text-sm md:text-base">
                    Short by:Default sorting
                  </h2>
                </div>
              </div>
              <ul className="mt-[31px] flex flex-wrap gap-[30px] text-center md:text-left justify-center md:justify-start">
                {isLoading
                  ? "Loading..."
                  : plantProducts.length
                  ? plantProducts.map((item: PlantProductsType) => (
                      <Product
                        key={item.id}
                        id={item.id}
                        images={item.images}
                        price={item.price}
                        title={item.title}
                      />
                    ))
                  : "Empty Product..."}
              </ul>
              <div className="mt-[90px] flex justify-center md:justify-end">
                <Pagination defaultCurrent={1} total={40} />
              </div>
            </div>
          </div>
          <SummerCom />
        </div>
      </section>
    </>
  );
}
export default Home;
