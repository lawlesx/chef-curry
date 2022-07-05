/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Image from 'next/image'
import { db } from '../firebaseConfig'
import { doc, getDoc } from 'firebase/firestore'

export async function getServerSideProps(context) {
  /* --------------------------- Use Firestore here --------------------------- */
  // Fetch data from external API
  // const res = await fetch(`https://.../data`)
  // const data = await res.json()

  const { id } = context.query
  let propVals = {
    title: '',
    details: '',
    image: '',
  }
  try {
    const docR = await getDoc(doc(db, 'recipes', id))
    const data = docR.data()
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
  console.log({ props })
  return (
    <div className="my-20">
      <h1 className="text-white text-4xl border-b-2 border-button mb-4">
        {props.title}
      </h1>
      <div className="flex w-full justify-between">
        <p className="text-lg text-tpurple w-1/2">{props.details}</p>
        <img
          src={props.image}
          alt="Recipe Image"
          className="w-[30rem] h-[30rem] object-cover"
        />
      </div>
    </div>
  )
}

export default id
