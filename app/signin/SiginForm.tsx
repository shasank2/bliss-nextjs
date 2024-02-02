'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { signIn } from 'next-auth/react'
import FancyButton from '@/components/shared/FancyButton'

type Props = {}

const SigninForm = (props: Props) => {
    const router = useRouter()
    const [user, setUser] = useState({
        email: '',
        password: ''
    })

    const Login = () => {
        try {
            signIn('credentials', {
                email: user.email,
                password: user.password,
                redirect: true,
                callbackUrl: '/'
            })
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className='flex flex-col items-center py-4'>
            <div className='p-10 flex flex-col gap-4 font-cinzel text-center text-xl'>
                <h1 className='text-5xl font-medium font-cera-stencil mb-4'>Login</h1>
                <h4 className='text-lg'>Enter your email and password</h4>
                <input
                    type="text"
                    className='p-2 border-gray-400 border-[2px] w-[400px] mb-4 focus:outline-none text-lg focus:border-black text-black'
                    id='email'
                    value={user.email}
                    placeholder='Email'
                    onChange={(e) => setUser({ ...user, email: e.target.value })}
                />
                <input
                    type="password"
                    className='p-2 border-gray-400 border-[2px] w-[400px] mb-4 focus:outline-none text-lg focus:border-black text-black'
                    id='password'
                    value={user.password}
                    placeholder='Password'
                    onChange={(e) => setUser({ ...user, password: e.target.value })}
                />
                <FancyButton  onClick={Login} className='border bg-[#8cd0e3] text-white text-xl '>
                    Login Now
                </FancyButton>
                <span className='text-lg'>
                    Do not have an account? <Link href='/signup' className='mt-5 text-gray-600 hover:text-[#B497E3] '>Create One</Link>
                </span>
            </div>
        </div>
    )
}

export default SigninForm