import React from 'react'
import FilterAndSort from './FilterAndSort'

type Props = {}

const AllProducts = (props: Props) => {
    return (
        <div className='py-4 mx-auto max-w-7xl px-2 sm:px-6 lg:px-8'>
            <h1 className='text-5xl text-center font-medium font-cera-stencil mb-4'>ALL PRODUCTS</h1>
            <FilterAndSort />
        </div>
    )
}

export default AllProducts