'use client';
import { useParams } from 'next/navigation';
import React from 'react'
import paris from '@/assets/paris.jpg'
import tokyo from '@/assets/toyko.jpg'
import newyork from '@/assets/newyork.jpg'
import Image from 'next/image';

export default function page(params) {
    const {city} = useParams();
  return (
   
    <div className='text-3xl  flex w-[50%] '> <h1>Well come to {city}</h1>  
    {
        city == "Paris" && <Image src={paris}  width={200}height={200} alt="img"  className='rounded-3xl flex flex-col ml-[50px]' />
    }{
        city == "Tokyo" && <Image src={tokyo}  width={200}height={200} alt="img"  />
    }{
        city == "NewYork" && <Image src={newyork}  width={200}height={200} alt="img"  />
    }
    
    </div>
  )
}
