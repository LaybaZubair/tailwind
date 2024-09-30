import React from 'react'
import photo from "../post/photo.webp"
function Post() {
  return (
    <>
     <section className="bg-gray-100 py-8">
      <div className="container mx-auto px-4">
        <div className="bg-slate-300 shadow-md rounded-lg overflow-hidden">
          <div className="md:flex">
       
            <div className="md:w-1/2">
              <img
                src={photo} X
                alt="Featured Post"
                className="w-full h-full object-cover"
              />
            </div>

       
            <div className="md:w-1/2 p-6 flex flex-col justify-between">
              <div>
                <h2 className="text-gray-500 text-sm uppercase font-semibold mb-2">
                  Featured Post
                </h2>
                <h1 className="text-2xl font-bold text-gray-900 mb-4">
                  Step-by-step guide to choosing great font pairs
                </h1>
                <p className="text-gray-700 mb-6">
                  Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident.
                </p>
              </div>
              <div className="flex justify-between items-center">
                <p className="text-gray-600">
                  By <span className="font-semibold">John Doe</span> | May 23, 2022
                </p>
                <a
                  href="#"
                  className="text-yellow-500 hover:text-yellow-600 font-semibold"
                >
                  Read More &gt;
                </a>
              </div>
            </div>

          </div>
        </div>
      </div>

    </section>
    </>
  )
}

export default Post