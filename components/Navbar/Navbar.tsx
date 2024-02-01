'use client'
import React from 'react'
import { getCurrentUser } from '../../lib/session'
import { signIn, signOut, useSession } from 'next-auth/react'
import Link from 'next/link'
import Promobar from './Promobar'
import MainNavbar from './MainNavbar'

type Props = {}

const Navbar = (props: Props) => {

  const { data } = useSession() // useSession is client sided function

  // const user = await getCurrentUser()
  // console.log(data)
  return (
    <>
      <Promobar />
      <MainNavbar />
    </>
  )
}

export default Navbar