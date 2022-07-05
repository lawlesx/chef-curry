import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'

const Cards = ({ title, href, index }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.01, backgroundColor: '#F876E3' }}
      className="w-full h-48 grid place-items-center bg-white p-4"
    >
      <div
        className={`w-full ${
          index % 2 ? 'bg-tpurple' : 'bg-cyellow'
        } relative h-full p-4`}
      >
        <h2 className="text-[4rem] text-white truncate w-3/5 font-bold uppercase">
          {title}
        </h2>
        <Link href={href} passHref>
          <motion.a
            whileHover={{ backgroundColor: '#42DDAE' }}
            className="p-2 bg-button text-white font-bold text-xl absolute bottom-0 right-0 px-4"
          >
            VIEW
          </motion.a>
        </Link>
      </div>
    </motion.div>
  )
}

export default Cards
