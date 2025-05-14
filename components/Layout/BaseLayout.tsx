"use client";

import HamburgerMenu from "../Navbar/HamburgerMenu";
import MenuCart from "../Navbar/MenuCart";
import Navbar from "../Navbar/Navbar";
import { SidebarProvider } from "../ui/sidebar";
import { Toaster } from "../ui/toaster";

type Props = {
  children: React.ReactNode;
};

const BaseLayout = ({ children }: Props) => {;
  return (
    <>
      <SidebarProvider defaultOpen={false}>
        <HamburgerMenu />
        <MenuCart />
        <main className="w-full">
          <Navbar />
          <div className="m-5">
            {children}
            <Toaster />
          </div>
        </main>
      </SidebarProvider>
    </>
  );
};
export default BaseLayout;
