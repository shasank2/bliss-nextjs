import React from 'react'

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"

type Props = {}

const ProductImageCarousel = (props: Props) => {
    return (
        <Carousel>
            <CarouselContent className='cursor-pointer'>
                <CarouselItem className='h-[24rem] min-w-[9rem] bg-blue-300'>A</CarouselItem>
                <CarouselItem className='h-[24rem] min-w-[9rem] bg-green-300'>B</CarouselItem>
                <CarouselItem className='h-[24rem] min-w-[9rem] bg-red-300'>C</CarouselItem>
            </CarouselContent>
            <CarouselPrevious variant={'default'} className='left-0 w-12 h-12  bg-transparent text-gray-700 hover:bg-slate-200/50 rounded-none [&>svg]:w-12 [&>svg]:h-12' />
            <CarouselNext variant={'default'} className='right-0 w-12 h-12  bg-transparent text-gray-700 hover:bg-slate-200/50 rounded-none [&>svg]:w-12 [&>svg]:h-12' />
        </Carousel>
    )
}

export default ProductImageCarousel