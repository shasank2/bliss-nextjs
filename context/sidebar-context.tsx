"use client"

import type React from "react"

import { createContext, useState, useContext } from "react"

type SidebarContextType = {
  isHamburgerMenuOpen: boolean
  isMenuCartOpen: boolean
  setIsHamburgerMenuOpen: (open: boolean) => void
  setIsMenuCartOpen: (open: boolean) => void
}

const SidebarContext = createContext<SidebarContextType | undefined>(undefined)

export const SidebarContextProvider = ({
  children,
}: {
  children: React.ReactNode
}) => {
  const [isHamburgerMenuOpen, setIsHamburgerMenuOpen] = useState(false)
  const [isMenuCartOpen, setIsMenuCartOpen] = useState(false)

  return (
    <SidebarContext.Provider
      value={{
        isHamburgerMenuOpen,
        isMenuCartOpen,
        setIsHamburgerMenuOpen,
        setIsMenuCartOpen,
      }}
    >
      {children}
    </SidebarContext.Provider>
  )
}

export const useSidebarContext = () => {
  const context = useContext(SidebarContext)
  if (!context) {
    throw new Error("useSidebarContext must be used within a SidebarProvider")
  }
  return context
}
