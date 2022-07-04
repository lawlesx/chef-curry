import Head from 'next/head'
import Cards from '../components/Cards'
import { motion } from 'framer-motion'
import { db } from '../firebaseConfig'
import { collection, getDocs } from 'firebase/firestore'
import { useEffect, useState } from 'react'

const dbInstance = collection(db, 'recipes')

export default function Home() {
  useEffect(() => {
    getRecipes();
  }, [])
  const [recipesArray, setRecipesArray] = useState([]);

  const getRecipes = () => {
    getDocs(dbInstance).then((data) => {
      console.log(data.docs.map((item) => {
        return { ...item.data(), id: item.id }
      }));
      setRecipesArray(data.docs.map((item) => {
        return { ...item.data(), id: item.id }
      }));
    }).catch((err) => {
      console.log(err)
    })
  }

  return (
    <div>
      <Head>
        <title>Chef Curry</title>
        <meta name="description" content="Recipe Book" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <motion.div
        initial={{ opacity: 0, x: '50vh' }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="w-full min-h-[80vh] flex justify-center flex-col"
      >
        <h1 className="uppercase text-tpurple text-[10rem]">Chef Curry</h1>
        <div className="w-full flex justify-end">
          <div className="w-1/2 flex flex-col items-end">
            <p className="text-2xl text-white font-medium">
              If you want to become a great chef, you have to work with great
              chefs. And {"that's"} exactly what I did.
            </p>
            <h2 className="text-2xl text-white font-bold">Gordan Ramsey</h2>
          </div>
        </div>
      </motion.div>
      {/* --------------------------------- Explore -------------------------------- */}
      <div className="my-20 w-full flex flex-col items-center">
        <h1
          className="text-white text-4xl border-b-2 border-button"
          id="explore"
        >
          Explore your recipies
        </h1>
        <div className="w-full flex flex-col items-center gap-4 p-20">
          {recipesArray.map((recipe, i) => (
            <Cards
              title={recipe.title}
              //TODO: Change to dynamic [id]
              href={`/${recipe.id}`}
              color={i % 2 == 0 ? 'cyellow' : 'tpurple'}
              key={i}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
