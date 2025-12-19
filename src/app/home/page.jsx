import React from 'react'
import Image from 'next/image'
import decore from '@/assets/Decore 1.png'
import traveller from '@/assets/Traveller 1.png'


export default function page() {
  return (
    <div
      className="h-screen w-full bg-no-repeat bg-top bg-right flex items-center justify-between px-20"
      style={{ backgroundImage: `url(${decore.src})` }}
    >
      
      <div className="max-w-lg">
        <h5 className="text-red-400 text-sm mb-2">Best Destinations around the world</h5>
        <h1 className="text-blue-900 text-6xl font-bold mb-4">
          Travel, enjoy<br />
          and live a new<br />
          and full life
        </h1>
        <p className="text-gray-700 text-sm">
          Built Wicket longer admire do barton vanity itself do in it. Preferred to sportsmen it engrossed listening. Park gate sell they west hard for the.
        </p>
      </div>

    
      <Image 
        src={traveller} 
        width={400} 
        height={400} 
        alt="img" 
        className="rounded-3xl"
      />
    </div>
  )
}
