'use client'
import React from 'react'
import ProductDetail from './ProductDetail'
import axios from 'axios'

type Props = {
    params: any
}

async function getData() {
    const res = await axios.get('/api/')
    // The return value is *not* serialized
    // You can return Date, Map, Set, etc.

    if (!res.ok) {
        // This will activate the closest `error.js` Error Boundary
        throw new Error('Failed to fetch data')
    }

    return res.json()
}

const page = ({ params }: Props) => {
    console.log(params)
    return (
        <ProductDetail />
    )
}

export default page