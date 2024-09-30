import React from 'react'

function Cards() {
  return (
<>
<section className="py-12 bg-white">
  <div className="container mx-auto">
    <h1 className="text-3xl font-bold text-center mb-8">Choose A Category</h1>
    
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <div className="bg-gray-100 w-full h-48 flex flex-col justify-center items-center text-center rounded-lg shadow-lg">
        <h3 className="text-xl font-semibold mb-2">Business</h3>
        <p className="text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      </div>

      <div className="bg-yellow-400 w-full h-48 flex flex-col justify-center items-center text-center rounded-lg shadow-lg">
        <h3 className="text-xl font-semibold mb-2">Startup</h3>
        <p className="text-gray-800">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      </div>

      <div className="bg-gray-100 w-full h-48 flex flex-col justify-center items-center text-center rounded-lg shadow-lg">
        <h3 className="text-xl font-semibold mb-2">Economy</h3>
        <p className="text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      </div>

      <div className="bg-gray-100 w-full h-48 flex flex-col justify-center items-center text-center rounded-lg shadow-lg">
        <h3 className="text-xl font-semibold mb-2">Technology</h3>
        <p className="text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      </div>
    </div>
  </div>
</section>



</>
  )
}

export default Cards