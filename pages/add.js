import React, { useState } from 'react'

const Add = () => {
  const [title, setTitle] = useState()
  const [recipe, setRecipe] = useState()
  return (
    <div className="w-full min-h-screen p-20">
      <div className="w-1/2 flex flex-col gap-4">
        <h1 className="font-semibold text-white text-lg pl-4">Title</h1>
        <input
          name="title"
          className="p-2 bg-tpurple focus:border-4 focus:border-cyellow focus:shadow-input rounded-md text-white font-medium text-lg outline-none w-full placeholder:text-white ease-in-out duration-200"
          placeholder="Eg. Vada Pav"
          onChange={(e) => setTitle(e.target.value)}
        />
        <h1 className="font-semibold text-white text-lg pl-4 mt-2">
          Recipe Contents
        </h1>
        <textarea
          name="recipe"
          className="p-2 bg-tpurple focus:border-4 focus:border-cyellow focus:shadow-input rounded-md text-white font-medium text-lg outline-none w-full placeholder:text-white ease-in-out duration-200 min-h-[10rem]"
          placeholder="Pour 1L of water to 1kg of flour ......"
          onChange={(e) => setRecipe(e.target.value)}
        />
        <button
          className="p-2 bg-button text-white font-bold text-xl max-w-max self-end mt-4"
          onClick={() => console.log({ title, recipe })}
        >
          Upload Recipe
        </button>
      </div>
    </div>
  )
}

export default Add
