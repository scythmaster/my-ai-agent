'use client'
import React, { createContext, useState } from 'react'

export interface NavigationContextType {
  isMobileNavOpen: boolean;
  setIsMobileNavOpen: (open: boolean) => void;
  closeMobileNav: () => void;
}
export const NavigationContext = createContext<NavigationContextType>({
    isMobileNavOpen: false,
    setIsMobileNavOpen: () => {},
    closeMobileNav: () => {}
  }
)
export default function NavigationProvider({
    children
}: {children: React.ReactNode}) {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  const closeMobileNav = () => {
    setIsMobileNavOpen(false);
  };
  return (
    <NavigationContext value = {{ isMobileNavOpen, setIsMobileNavOpen, closeMobileNav}}>
      {children}
 </NavigationContext>
  );
}
