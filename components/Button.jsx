const Button = ({onClick ,children}) => {
  return (
    <button onClick={onClick} className="p-2 bg-button text-white font-bold text-xl">{children}</button>
  )
}

export default Button