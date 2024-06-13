// "use server";
// import HeroMobile from "@/components/HeroCarusel/HeroMobile";
// import HeroCarusel from "../components/HeroCarusel";
// import { getCategory } from "@/service/getCategory";
// import { RangeSlider } from "@/components/RangeSlider";
// import { getSize } from "@/service/getSize";
// import Link from "next/link";

// interface CategoryType {
//   id: string;
//   title: string;
//   count: string;
// }

// export default async function Home() {
//   // const categoryData:any = await getCategory()
//   const [categoryData, sizesData] = await Promise.all([
//     getCategory(),
//     getSize(),
//   ]);

//   return (
//     <>
//       <section className="pt-[12px] pb-[46px]">
//         <div className="container px-5 md:px-0">
//           <HeroCarusel />
//           <HeroMobile />
//         </div>
//       </section>
//       <section>
//         <div className="container">
//           <div className="flex justify-between">
//             <div className="w-[310px] bg-[#FBFBFB]">
//               <div className="p-[15px]">
//                 <h2 className="font-bold text-[18px] leading-[16px]">
//                   Categories
//                 </h2>
//                 <ul className="pl-[12px] space-y-[15px] mt-[20px] mb-[36px]">
//                   {categoryData &&
//                     Array.isArray(categoryData) &&
//                     categoryData.length > 0 &&
//                     categoryData.map((item: CategoryType) => (
//                       <li
//                         className="flex items-center justify-between"
//                         key={item.id}
//                       >
//                         <span>{item.title}</span>
//                         <span>({item.count})</span>
//                       </li>
//                     ))}
//                 </ul>
//                 <h2 className="font-bold text-[18px] leading-[16px]">
//                   Price Range
//                 </h2>
//                 <RangeSlider />
//                 <h2 className="font-bold text-[18px] leading-[16px] mt-[46px]">
//                   Size
//                 </h2>
//                 <ul className="pl-[12px] space-y-[15px] mt-[20px] mb-[36px]">
//                   {sizesData &&
//                     Array.isArray(sizesData) &&
//                     sizesData.length > 0 &&
//                     sizesData.map((item: CategoryType) => (
//                       <li
//                         className="flex items-center justify-between"
//                         key={item.id}
//                       >
//                         <span>{item.title}</span>
//                         <span>({item.count})</span>
//                       </li>
//                     ))}
//                 </ul>
//               </div>
//               <Link href={"#"}>
//                 <img
//                   className=""
//                   src="/Super-Sale2.png"
//                   alt="Plant"
//                   width={"100%"}
//                   height={470}
//                 />
//               </Link>
//             </div>
//             <div className="w-[840px]"></div>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// }
