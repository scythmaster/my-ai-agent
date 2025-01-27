import { NavigationContext } from '@/lib/NavigatorProvider';
import { useRouter } from 'next/router'
import React, { use } from 'react'

export default function Sidebar() {
    const router = useRouter();
    const { closeMobileNav, isMobileNavOpen } = use(NavigationContext)
  return (
    <>{
        isMobileNavOpen && (
            <div className='fixed inset bg-black/20 z-40 md:hidden' onClick={closeMobileNav}></div>
        )
    }</>
  )
}
