import React from 'react'

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import Image from 'next/image'

type Props = {
    images: string
}

const ProductImageCarousel = (props: Props) => {
    const { images } = props
    
    return (
        <Carousel opts={{loop:true}}>
            <CarouselContent className='cursor-pointer'>
                {JSON.parse(images || "")?.map((image: string, index: number) => {
                    return (
                        <CarouselItem key={index} className='h-[24rem] min-w-[9rem]'>
                            <Image src={image} width={700} height={700} alt='asasdasd' />
                        </CarouselItem>
                    )
                })}
            </CarouselContent>
            <CarouselPrevious variant={'default'} className='left-0 w-12 h-12  bg-transparent text-gray-700 hover:bg-slate-200/50 rounded-none [&>svg]:w-12 [&>svg]:h-12' />
            <CarouselNext variant={'default'} className='right-0 w-12 h-12  bg-transparent text-gray-700 hover:bg-slate-200/50 rounded-none [&>svg]:w-12 [&>svg]:h-12' />
        </Carousel>
    )
}

export default ProductImageCarousel