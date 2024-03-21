'use client'
import React, { Fragment, useEffect, useState } from 'react'
import FilterAndSort from './FilterAndSort'
import ProductCard from './ProductCard/ProductCard'
import axios from 'axios'

type Props = {}

const AllProducts = (props: Props) => {

    const [productList, setProductList] = useState([])

    useEffect(() => {
        (async () => {
            try {
                await axios.get('/api/getproducts').then((res) => setProductList(res.data))
            } catch (error) {
                console.log(error)
            }
        })();
    },[])


    return (
        <div className='py-4 mx-auto max-w-7xl px-2 sm:px-6 lg:px-8'>
            <h1 className='text-5xl text-center font-medium font-cera-stencil mb-4'>ALL PRODUCTS</h1>
            <FilterAndSort />

            <div className='flex flex-wrap gap-32 justify-center'>
                {productList.map((elem: any, index: number) => {
                    return (
                        <Fragment key={index}>
                            <ProductCard title={elem.title} desc={elem.description} price={elem.price} images={elem.images}  />
                        </Fragment>
                    )
                })}
            </div>
        </div>
    )
}

export default AllProducts