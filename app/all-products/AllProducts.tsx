import React from 'react'
import FilterAndSort from './FilterAndSort'
import ProductCard from './ProductCard/ProductCard'

type Props = {}

const AllProducts = (props: Props) => {

    return (
        <div className='py-4 mx-auto max-w-7xl px-2 sm:px-6 lg:px-8'>
            <h1 className='text-5xl text-center font-medium font-cera-stencil mb-4'>ALL PRODUCTS</h1>
            <FilterAndSort />

            <div className='flex flex-wrap gap-32 justify-center'>
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
            </div>
        </div>
    )
}

export default AllProducts