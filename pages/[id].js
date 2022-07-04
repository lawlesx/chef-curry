import React from 'react'
import Image from 'next/image'
import { db } from '../firebaseConfig'
import { getDoc } from 'firebase/firestore'

export async function getServerSideProps(context) {
  /* --------------------------- Use Firestore here --------------------------- */
  // Fetch data from external API
  // const res = await fetch(`https://.../data`)
  // const data = await res.json()

  const { id } = context.query;
  let propVals = {
    title: "",
    details: "",
    image: ""
  } 
  try {
    const doc = await getDoc(db, 'recipes', id)
    const data = doc.data()
    propVals.title = data.title
    propVals.details = data.details
    propVals.image = data.image
  } catch (error) {
    console.log(error)
  }

  // Pass data to the page via props

  return {
    props: propVals, // will be passed to the page component as props
  }
}
const id = (props) => {
  return (
    <div className="my-20">
      <h1 className="text-white text-4xl border-b-2 border-button mb-4">
        {props.title}
      </h1>
      <div className="flex w-full justify-between">
        <p className="text-lg text-tpurple w-1/2">
          {props.details}
        </p>
        <div className="relative w-[30rem] h-[30rem]">
          <Image
            src={props.imageSrc}
            objectFit="cover"
            layout="fill"
            alt="Recipe Image"
          />
          {/* <img src={recipeDetails.image} alt="Recipe Image" style={{ object-fit: "cover"}} /> */}
        </div>
      </div>
    </div>
  )
}

export default id
