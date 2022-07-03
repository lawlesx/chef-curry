import React from 'react'
import Image from 'next/image'

export async function getServerSideProps() {
  /* --------------------------- Use Firestore here --------------------------- */
  // Fetch data from external API
  // const res = await fetch(`https://.../data`)
  // const data = await res.json()

  // Pass data to the page via props

  return {
    props: {}, // will be passed to the page component as props
  }
}

const id = () => {
  return (
    <div className="my-20">
      <h1 className="text-white text-4xl border-b-2 border-button mb-4">
        VADA PAV
      </h1>
      <div className="flex w-full justify-between">
        <p className="text-lg text-tpurple w-1/2">
          It is one of the most humble street foods in Mumbai, yet it is tasty
          and delicious. Vada pav basically has Batata vada which is sandwiched
          between two slices of a pav (dinner roll) topped with sweet chutney,
          green chutney, and dry garlic chutney. Batata vada are fried batter
          coated potato dumpling fritters. The batter is made with nutty gram
          flour (besan) and spices. The filling consist of savory, spiced mashed
          potatoes. Batata means potato Marathi language. While the term vada
          mostly means a fried fritter or a fried dumpling-like savory dish.
          Throughout my childhood, I ate vada pav in many places in Mumbai and
          it was always so delicious! Even today I still make sure that I buy
          vada pav whenever I visit Mumbai. However, when I am craving vada pav
          and can’t get to Mumbai, so I make them at home. Pav means a small
          loaf of bread in Indian and is the same as dinner rolls. They are made
          with all purpose flour or whole wheat flour and can be bought from
          bakeries, super stores and sweet shops in India. Vada pav can be eaten
          during any time of the day like breakfast, brunch, or in the evening
          as a snack. It goes very well with Indian chai, fried green chilies,
          and chutney like coriander chutney or mint chutney or green chutney.
        </p>
        <div className="relative w-[30rem] h-[30rem]">
          <Image
            src="/Images/recipe.png"
            objectFit="cover"
            layout="fill"
            alt="Recipe Image"
          />
        </div>
      </div>
    </div>
  )
}

export default id
