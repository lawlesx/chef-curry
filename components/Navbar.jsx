import Link from 'next/link'

export const Navbar = () => {
  return (
    <div className="w-full flex justify-between items-center py-4">
      <h1 className="uppercase text-tpurple text-4xl">Chef Curry</h1>
      <section className="flex justify-between w-1/4 items-center">
        <NavItems href="/">Home</NavItems>
        <NavItems href="#explore">Explore</NavItems>
        <Link href="/add">
          <a className="p-2 px-4 bg-button text-white font-bold text-xl">
            Add A Recipe
          </a>
        </Link>
      </section>
    </div>
  )
}

const NavItems = ({ children, href }) => (
  <Link href={href}>
    <a className="text-xl text-white cursor-pointer font-medium">{children}</a>
  </Link>
)

export default Navbar
