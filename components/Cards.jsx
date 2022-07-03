import React from 'react'
import Link from 'next/link'

const Cards = ({ title, view, color }) => {
  return (
    <div className="w-full h-48 grid place-items-center bg-white p-4">
      <div className={`w-full bg-${color} relative h-full p-4`}>
        <h2 className="text-[4rem] text-white truncate w-3/5 font-bold uppercase">
          {title}
        </h2>
        <Link href={view} passHref>
          <a className="p-2 bg-button text-white font-bold text-xl absolute bottom-0 right-0 px-4">
            VIEW
          </a>
        </Link>
      </div>
    </div>
  )
}

export default Cards
