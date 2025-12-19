"use client";

import React from 'react' ;
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
    const pathname = usePathname() ;
    return (
        <div className='w-full h-[80px] bg-green-500 flex justify-between items-center '>
            <div>
                <h1 className='font-bold '>🌍 Travel Guide  </h1>
            </div>
            <div >
                <ul className='flex justify-center items-center gap-4 pr-5'>
             <li>
                        <Link href="/" className={pathname == "/"?"text-white":""} >Home</Link>
                    </li>
                     <li>
                        <Link href="/about" className={pathname == "/about"?"text-white":""} >About</Link>
                    </li>
<li>
                        <Link href="/contact" className={pathname == "/contact"?"text-white":""}>Contact</Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}
