import React from 'react'
import ProductImageCarousel from './ProductImageCarousel'

type Props = {}

const ProductCard = (props: Props) => {
    return (
        <div className='font-archer bg-gray-200 flex flex-col items-center gap-4'>
            <ProductImageCarousel />
            <span>Lemon Sage Body Butter</span>

        </div>
    )
}

export default ProductCard