'use client'
import React from 'react'
import { useState } from 'react'


type Props = {}

const SignupForm = (props: Props) => {

    const [userInfo, setuserInfo] = useState({
        name: '',
        email: '',
        password: ''
    })
    return (
        <div>SignupForm</div>
    )
}

export default SignupForm