import React, { useState  } from 'react'
import { useRouter } from 'next/router'
import { motion } from 'framer-motion'
import { collection, addDoc } from "firebase/firestore"; 
import { db } from '../firebaseConfig'

const Add = () => {
  const [title, setTitle] = useState()
  const [image, setImage] = useState()
  const [recipe, setRecipe] = useState()

  const router = useRouter()

  const handleSubmit = () => {
    console.log(title, recipe)
    addDoc(collection(db, 'recipes'), {
      title,
      details: recipe,
      image
    })
    .then(() => {
      console.log('success')
      router.push('/')
    }).catch((err) => {
      console.log(err)
    })
  }

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
         <h1 className="font-semibold text-white text-lg pl-4">Recipe Image Source</h1>
        <input
          name="imageSrc"
          className="p-2 bg-tpurple focus:border-4 focus:border-cyellow focus:shadow-input rounded-md text-white font-medium text-lg outline-none w-full placeholder:text-white ease-in-out duration-200"
          placeholder="Eg. https://url.com/image.jpg"
          onChange={(e) => setImage(e.target.value)}
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
        <motion.button
          whileHover={{ scale: 1.05, backgroundColor: '#42DDAE' }}
          className="p-2 bg-button text-white font-bold text-xl max-w-max self-end mt-4"
          onClick={handleSubmit}
        >
          Upload Recipe
        </motion.button>
      </div>
    </div>
  )
}

export default Add
