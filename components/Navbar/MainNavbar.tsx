'use client'
import React, { useState } from 'react'
import { getCurrentUser } from '../../lib/session'
import { signIn, signOut, useSession } from 'next-auth/react'
import Link from 'next/link'

import { LuUser } from "react-icons/lu";
import { GrLogout } from "react-icons/gr";
import { IoMdNotificationsOutline } from "react-icons/io";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { IoSearch } from "react-icons/io5";

type Props = {}

const MainNavbar = (props: Props) => {

    const [open, setOpen] = useState<boolean>(false)
    const { data } = useSession() // useSession is client sided function

    return (
        <nav className="bg-[#8cd0e3]">
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                <div className="relative flex h-24 items-center justify-between">
                    <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                        <button type="button" onClick={() => setOpen(!open)} className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:text-white" aria-controls="mobile-menu" aria-expanded="false">
                            <span className="absolute -inset-0.5"></span>
                            <span className="sr-only">Open main menu</span>

                            <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                            </svg>

                            <svg className="hidden h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                    <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                        <div className="flex flex-shrink-0 items-center">
                            <span className='text-5xl font-bold font-cera-stencil text-stone-50'>bliss<span></span> </span>
                        </div>

                        <div className="hidden sm:ml-20 sm:block">
                            <div className="flex space-x-4 font-archer text-xl text-stone-100 underline-offset-4">
                                {/* <a href="#" className="bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium" aria-current="page">Dashboard</a> */}
                                <Link href="/all-products" className="hover:underline  hover:text-white block px-3 py-2">All Products</Link>
                                <Link href="#" className="hover:underline  hover:text-white block px-3 py-2">Best Selling</Link>
                                <Link href="#" className="hover:underline  hover:text-white block px-3 py-2">Sets & Kits</Link>
                                <Link href="#" className="hover:underline  hover:text-white block px-3 py-2">Accessories</Link>
                            </div>
                        </div>
                    </div>
                    <div className="space-x-3">
                        <button type="button">
                            <span className="sr-only">Search</span>
                            <span className='text-white text-3xl  cursor-pointer'><IoSearch /></span>
                        </button>
                        <button type="button">
                            <span className="sr-only">View notifications</span>
                            <span className='text-white text-3xl  cursor-pointer'><IoMdNotificationsOutline /></span>
                        </button>
                        <button onClick={() => { }} >
                            <span className="sr-only">Add to cart</span>
                            <span className='text-white text-3xl cursor-pointer'><HiOutlineShoppingBag /></span>
                        </button>
                        {
                            data?.user ?
                                <button onClick={() => signOut()}>
                                    <span className="sr-only">Sign Out</span>
                                    <span className='text-white text-3xl cursor-pointer'><GrLogout /></span>
                                </button>
                                :
                                <button onClick={() => signIn()} >
                                    <span className="sr-only">Sign In</span>
                                    <span className='text-white text-3xl cursor-pointer'><LuUser /></span>
                                </button>
                        }

                        <div className='text-white pl-2'>{data?.user?.name}</div>
                    </div>
                </div>
            </div>
            {
                open ?
                    <div className="sm:hidden" id="mobile-menu">
                        <div className="space-y-1 px-2 pb-3 text-stone-100 underline-offset-4 font-archer text-xl">
                            {/* <a href="#" className="bg-gray-900 text-white block rounded-md px-3 py-2 text-base font-medium" aria-current="page">Dashboard</a> */}
                            <Link href="/all-products" className="hover:underline  hover:text-white block px-3 py-2">All Products</Link>
                            <Link href="#" className="hover:underline  hover:text-white block px-3 py-2">Best Selling</Link>
                            <Link href="#" className="hover:underline  hover:text-white block px-3 py-2">Sets & Kits</Link>
                            <Link href="#" className="hover:underline  hover:text-white block px-3 py-2">Accessories</Link>
                        </div>
                    </div> : null
            }

        </nav>
    )
}

export default MainNavbar