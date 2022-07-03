import Head from 'next/head'
import Cards from '../components/Cards'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Chef Curry</title>
        <meta name="description" content="Recipe Book" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="w-full min-h-[80vh] flex justify-center flex-col">
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
      </div>
      {/* --------------------------------- Explore -------------------------------- */}
      <div className="my-20 w-full flex flex-col items-center">
        <h1 className="text-white text-4xl border-b-2 border-button">
          Explore your recipies
        </h1>
        <div className="w-full flex flex-col items-center gap-4 p-20">
          {[...Array(5).keys()].map((recipe, i) => (
            <Cards
              title="Vada Pav"
              view="/"
              color={i % 2 == 0 ? 'cyellow' : 'tpurple'}
              key={i}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
