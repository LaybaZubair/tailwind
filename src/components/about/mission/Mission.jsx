import React from 'react'

function Mission() {
  return (
   <>
   <section className="bg-gray-100 py-8">
        <div className="container mx-auto px-4 flex flex-col md:flex-row gap-8">
    
          <div className="md:w-1/2">
            <p className="text-black-500 font-semibold mb-2">OUR MISSION</p>
            <h1 className="text-4xl font-bold mb-4">
            Creating valuable content for <br />creatives all around the world
            </h1>
            <p className="text-gray-700 mb-4">
              Lorem ipsum dolor sit amet consectetur adipisicing <br />
              elit. Officiis, fugit. Quos iusto pariatur, beatae ducimus est ab.
            </p>
            <button className="bg-yellow-500 text-black font-semibold py-2 px-4 rounded hover:bg-yellow-600 transition">
              Read more
            </button>
          </div>

          <div className="md:w-1/2">
            <p className="text-black-500 font-semibold mb-2">OUR VISION</p>
            <h1 className="text-4xl font-bold mb-4">
            A platform that empowers <br /> individuals to improve
            </h1>
            <p className="text-gray-700 mb-4">
              Lorem ipsum dolor sit amet consectetur adipisicing <br />
              elit. Expedita aliquam dolorum similique <br />
              porro, quis non dolor, corrupti, laboriosam ratione recusandae <br />
              illum corporis qui eum fugiat libero rem sequi quibusdam excepturi.
            </p>
          </div>
        </div>
      </section>
   </>
  )
}

export default Mission