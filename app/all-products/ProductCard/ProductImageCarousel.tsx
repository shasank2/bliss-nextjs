import React, { useEffect, useState } from "react";

import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

type Props = {
  images: string;
};

const ProductImageCarousel = (props: Props) => {
  const { images } = props;

  const [api, setApi] = useState<CarouselApi>()
  const [current, setCurrent] = useState(0)
  const [count, setCount] = useState(0)

  let carouselItemsList = JSON.parse(images || "");
console.log(api)
  // useEffect(() => {
  //   if (!api) {
  //     return
  //   }
 
  //   setCount(api.scrollSnapList().length)
  //   setCurrent(api.selectedScrollSnap() + 1)
 
  //   api.on("select", () => {
  //     setCurrent(api.selectedScrollSnap() + 1)
  //   })
  // }, [api])

  return (
    <Carousel setApi={setApi} opts={{ loop: true }}>
      <CarouselContent className="cursor-pointer">
        {carouselItemsList.map((image: string, index: number) => {
          return (
            <CarouselItem key={index} className="h-[24rem] min-w-[9rem]">
              <Image src={image} width={700} height={700} alt="asasdasd" />
            </CarouselItem>
          );
        })}
      </CarouselContent>
      {carouselItemsList.length > 1 ? (
        <>
          <CarouselPrevious
            onClick={(e) => e.preventDefault()}
            variant={"default"}
            className="left-0 w-12 h-12  bg-transparent text-gray-700 hover:bg-slate-200/50 rounded-none [&>svg]:w-12 [&>svg]:h-12"
          />
          <CarouselNext
            onClick={(e) => {e.preventDefault(); api?.scrollNext;} }
            variant={"default"}
            className="right-0 w-12 h-12  bg-transparent text-gray-700 hover:bg-slate-200/50 rounded-none [&>svg]:w-12 [&>svg]:h-12"
          />
        </>
      ) : null}
    </Carousel>
  );
};

export default ProductImageCarousel;
