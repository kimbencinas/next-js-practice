import React from 'react'
import Image from 'next/image'
import meow from '../public/images/meow.jpg'

export default function Page() {
  return (
    <div>
      <div className="bg-white flex justify-center rounded-t-xl mt-20 w-100 p-10">
        <div className="flex items-center space-x-5">
          <Image src={meow} alt="Kitten" className="rounded-lg w-24" />
          <div className="flex flex-col">
            <p className="text-black">Mewsic Player</p>
            <p className="text-gray-500">BlackPink</p>
            <p className="text-black font-bold">How Mew Like That</p>
          </div>
          <div>
            <button type="button" aria-label="Pause">

            </button>
          </div>
        </div>
      </div>
    </div>
  )
}