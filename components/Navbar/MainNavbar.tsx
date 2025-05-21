"use client";
import React, { useState } from "react";
import { getCurrentUser } from "../../lib/session";
import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";

import { LuUser } from "react-icons/lu";
import { GrLogout } from "react-icons/gr";
import { IoMdNotificationsOutline } from "react-icons/io";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { IoSearch } from "react-icons/io5";
import NavbarSearch from "./NavbarSearch";
import NavigationDropdown from "./NavigationDropdown";
import { useSidebarContext } from "@/context/sidebar-context";

type Props = {};

const MainNavbar = (props: Props) => {
  const {
    isHamburgerMenuOpen,
    isMenuCartOpen,
    setIsMenuCartOpen,
    setIsHamburgerMenuOpen,
  } = useSidebarContext();



  const [showSearch, setShowSearch] = useState<boolean>(false);
  const { data } = useSession(); // useSession is client sided function

  return (
    <div className="relative">
      <nav className="bg-[#8cd0e3] z-10 relative">
        <div className="px-2 lg:px-8">
          <div className="flex justify-between items-center h-24">
            <div className="flex items-center w-1/3 lg:w-auto">
              <button
                type="button"
                onClick={() => setIsHamburgerMenuOpen(!isHamburgerMenuOpen)}
                className="lg:hidden relative flex items-center justify-center rounded-md p-3 text-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="absolute -inset-0.5"></span>
                <span className="sr-only">Open main menu</span>
                <svg
                  className="h-8 w-8 transition-transform duration-300 ease-in-out hover:scale-110 hover:rotate-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              </button>

              <span className="hidden lg:block text-5xl font-bold font-cera-stencil text-stone-50">
                bliss
              </span>
            </div>

            <div className="flex justify-center w-1/3 lg:w-auto">
              <span className="lg:hidden text-5xl font-bold font-cera-stencil text-stone-50">
                bliss
              </span>
              <div className="hidden lg:flex space-x-6 font-archer text-stone-100">
                <NavigationDropdown />
              </div>
            </div>

            <div className="flex justify-end items-center space-x-3 text-white text-3xl w-1/3 lg:w-auto">
              <button onClick={() => setShowSearch(!showSearch)}>
                <IoSearch className="transition-transform duration-300 ease-in-out hover:scale-110 hover:text-white/80" />
              </button>
              <button>
                <IoMdNotificationsOutline className="transition-transform duration-300 ease-in-out hover:scale-110 hover:text-white/80" />
              </button>
              <button onClick={() => setIsMenuCartOpen(!isMenuCartOpen)}>
                <HiOutlineShoppingBag className="transition-transform duration-300 ease-in-out hover:scale-110 hover:text-white/80" />
              </button>
              {data?.user ? (
                <>
                  <button onClick={() => signOut()}>
                    <GrLogout className="transition-transform duration-300 ease-in-out hover:scale-110 hover:text-white/80" />
                  </button>
                  <div className="text-base pl-2">{data.user.name}</div>
                </>
              ) : (
                <button onClick={() => signIn()}>
                  <LuUser className="transition-transform duration-300 ease-in-out hover:scale-110 hover:text-white/80" />
                </button>
              )}
            </div>
          </div>
        </div>
      </nav>

      <NavbarSearch showSearch={showSearch} />
    </div>
  );
};

export default MainNavbar;
