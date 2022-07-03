import Button from './Button'

export const Navbar = () => {
  return (
    <div className="w-full flex justify-end py-4">
      <section className="flex justify-between w-1/5 items-center">
        <NavItems>Home</NavItems>
        <NavItems>Explore</NavItems>
        <Button>Add A Recipe</Button>
      </section>
    </div>
  )
}

const NavItems = ({ children }) => (
  <h2 className="text-xl text-white cursor-pointer font-medium">{children}</h2>
)

export default Navbar
