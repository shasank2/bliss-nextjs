"use client";

import { SidebarContextProvider } from "@/context/sidebar-context";
import HamburgerMenu from "../Navbar/HamburgerMenu";
import MenuCart from "../Navbar/MenuCart";
import Navbar from "../Navbar/Navbar";
import { Toaster } from "../ui/toaster";

type Props = {
  children: React.ReactNode;
};

const BaseLayout = ({ children }: Props) => {
  return (
    <SidebarContextProvider>
      <HamburgerMenu />
      <MenuCart />
      <main className="w-full">
        <Navbar />
        <div className="m-5">
          {children}
          <Toaster />
        </div>
      </main>
    </SidebarContextProvider>
  );
};
export default BaseLayout;
