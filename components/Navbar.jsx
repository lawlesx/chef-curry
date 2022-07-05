import Link from 'next/link'
import { motion } from 'framer-motion'

export const Navbar = () => {
  return (
    <motion.div
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="w-full flex justify-between items-center py-4"
    >
      <h1 className="uppercase text-tpurple text-4xl">Chef Curry</h1>
      <section className="flex justify-between w-1/4 items-center">
        <NavItems href="/">Home</NavItems>
        <NavItems href="/#explore">Explore</NavItems>
        <Link href="/add">
          <motion.a
            whileHover={{ scale: 1.05, backgroundColor: '#42DDAE' }}
            className="p-2 px-4 bg-button text-white font-bold text-xl cursor-pointer"
          >
            Add A Recipe
          </motion.a>
        </Link>
      </section>
    </motion.div>
  )
}

const NavItems = ({ children, href }) => (
  <Link href={href}>
    <motion.a
      whileHover={{ scale: 1.05, color: '#42DDAE' }}
      className="text-xl text-white ease-in-out cursor-pointer font-medium"
    >
      {children}
    </motion.a>
  </Link>
)

export default Navbar
