'use client';
import { useRouter } from 'next/navigation'
import React from 'react'

export default function page() {
    const destination = ["Paris", "Tokyo", "NewYork"]
    const router = useRouter()
    return (


        <div>
            <div>
                <h1 className='font-bold text-2xl flex  justify-center '>Choose Your Destination </h1>
            </div>
            <div className='flex flex-col  gap-3  justify-center items-center' >
                {destination.map((d, index) => (
                    <div key={index} className='text-white  flex items-center justify-center rounded-2xl w-[200px]
    h-[100px] bg-black mt-2 hover:opacity-[0.5]  transition-all ' onClick={() => router.push(`/about/${d}`)} >
                        {d} </div>
                )

                )}
            </div>

        </div>
    )
}
