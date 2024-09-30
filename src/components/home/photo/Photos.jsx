import React from 'react'
import client14 from "../photo/client14.png"
function Photos() {
  return (
   <>
      <section
      className="bg-cover bg-center min-h-[80vh] flex items-center"
      style={{ backgroundImage: `url(${client14})` }}
    >
      <div className="container mx-auto px-4">
        <div className="max-w-1/2 ml-0 text-white md:max-w-full md:ml-0">
          <p className="text-white-500">Posted on startup</p>
          <h1 className="text-4xl font-bold leading-tight">
            Step-by-step guide to choosing <br />
            great font pairings
          </h1>
          <p className="mt-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
            recusandae eum quasi, odit deserunt accusantium cupiditate
            dignissimos corrupti. Ut, quae?
          </p>
          <button
            type="button"
            className="mt-6 bg-yellow-500 text-black font-semibold py-2 px-4 rounded hover:bg-yellow-600 transition"
          >
            Read more
          </button>
        </div>
      </div>
    </section>
   </>
  )
}

export default Photos