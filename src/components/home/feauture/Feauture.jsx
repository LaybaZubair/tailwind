import React from 'react'
import house1 from "../feauture/house1.jpg"
function Feauture() {
  return (
<>
<section className="bg-gray-100 py-8">
        <div className="container mx-auto px-4 flex flex-col md:flex-row gap-8">
        
          <div className="md:w-1/2">
            <h1 className="text-4xl font-bold mb-4">Features Post</h1>
            <img
              src={house1}
              alt="Description of the image"
              className="w-full h-auto rounded-lg mb-4"
            />
            <p className="text-gray-500 mb-2">By John Doe / May 23, 2022</p>
            <h2 className="text-2xl font-semibold mb-4">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum,
              perspiciatis! Voluptas, voluptates.
            </h2>
            <p className="text-gray-700 mb-4">
              Lorem ipsum dolor sit amet consectetur <br />
              adipisicing elit. Tempore quibusdam quod.
            </p>
            <button className="bg-yellow-500 text-black font-semibold py-2 px-4 rounded hover:bg-yellow-600 transition">
              Read more
            </button>
          </div>

    
          <div className="md:w-1/2">
            <h1 className="text-4xl font-bold mb-4">All Posts</h1>

            <div className="space-y-6">
              <div className="border-b pb-4">
                <p className="text-gray-500">By John Doe / Aug 23, 2022</p>
                <h3 className="text-xl font-semibold">
                  8 Figma design systems that <br />
                  you can download for free today
                </h3>
              </div>

              <div className="border-b pb-4">
                <p className="text-gray-500">By John Doe / Aug 23, 2022</p>
                <h3 className="text-xl font-semibold">
                  8 Figma design systems that <br />
                  you can download for free today
                </h3>
              </div>

              <div className="border-b pb-4">
                <p className="text-gray-500">By John Doe / Aug 23, 2022</p>
                <h3 className="text-xl font-semibold">
                  8 Figma design systems that <br />
                  you can download for free today
                </h3>
              </div>

              <div className="border-b pb-4">
                <p className="text-gray-500">By John Doe / Aug 23, 2022</p>
                <h3 className="text-xl font-semibold">
                  8 Figma design systems that <br />
                  you can download for free today
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>
</>
  )
}

export default Feauture