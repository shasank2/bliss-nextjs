'use client'
import React, { useEffect, useState } from 'react'
import { useSession } from 'next-auth/react'
import Size from '../../components/AddProduct/Size'
import Color from '../../components/AddProduct/Color'
import ImageUpload from '../../components/AddProduct/ImageUpload'
import { redirect } from 'next/navigation'
import axios from 'axios'

type Props = {}

const ProductForm = (props: Props) => {
    const { data } = useSession()
    const id = data?.user.id

    if (!id){
        redirect('/api/auth/signin?callbackUrl=/addproduct')
    }

    const [info, updateinfo] = useState<any>()
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        category: '',
        style: '',
        size: '',
        inventory: 0,
        color: 'green',
        price: 0,
        images: '',
        userId: id,
        store: ''
    })

    const [imageUrls, setImageUrls] = useState<string[]>([])

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleImageChange = () => {
        const stringimages = JSON.stringify(imageUrls)
        setFormData({
            ...formData,
            images: stringimages
        })
    }

    useEffect(() => {
        handleImageChange()
        console.log(formData)
    }, [imageUrls])

    const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        // const value = e.target.name === "price" && parseInt(e.target.value)
        // const inventory = e.target.name === "inventory" && parseInt(e.target.value)
        setFormData({
            ...formData,
            [e.target.name]: parseInt(e.target.value)
        })
    }


    const handleSubmitAddProduct = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault()
        try {
            let res = await axios.post('/api/addproduct', formData)
            // clear state
            setFormData({
                title: '',
                description: '',
                category: '',
                style: '',
                size: '',
                inventory: 0,
                color: '',
                price: 0,
                images: '',
                userId: id,
                store: ''
            })
            console.log(res)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className="w-full">
            <div className='flex justify-center'>
                <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 grid grid-cols-3 gap-5">
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" >
                            Title
                        </label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name='title' type="text" placeholder="Title" onChange={handleChange} value={formData.title} />
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" >
                            description
                        </label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name='description' type="text" placeholder="description" onChange={handleChange} value={formData.description} />
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" >
                            category
                        </label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name='category' type="text" onChange={handleChange} value={formData.category} />
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" >
                            style
                        </label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name='style' type="text" onChange={handleChange} value={formData.style} />
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" >
                            store
                        </label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name='store' type="text" onChange={handleChange} value={formData.store} />
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" >
                            size
                        </label>
                        <input disabled={true} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name='size' type="text" onChange={handleChange} value={formData.size} />
                    </div>

                    <Size setFormData={setFormData} />
                    <br />

                    {/* <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" >
                            inventory
                        </label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name='inventory' type="number" onChange={handlePriceChange} value={formData.inventory} />
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" >
                            price
                        </label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name='price' type="number" onChange={handlePriceChange} value={formData.price} />
                    </div> */}


                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" >
                            inventory
                        </label>
                        <input
                            type="number"
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            name='inventory'
                            value={formData.inventory}
                            onChange={handlePriceChange}
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" >
                            price
                        </label>
                        <input
                            type="number"
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            name='price'
                            value={formData.price}
                            onChange={handlePriceChange}
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" >
                            color
                        </label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name='color' type="text" onChange={handleChange} value={formData.color} />
                    </div>
                    <Color setFormData={setFormData} Color={formData.color} />

                    <div className="mb-4">
                        <ImageUpload info={info} updateInfo={updateinfo} imageUrls={imageUrls} setImageUrls={setImageUrls} handleImageChange={handleImageChange} />
                    </div>


                    <div className="flex items-center justify-between">
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button" onClick={(e) => { handleSubmitAddProduct(e) }}>
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default ProductForm