import React from 'react'
import pic1 from "../picards/pic1.webp"
function Picards() {
  return (
    <>
<section className="py-8">
  <div className="container mx-auto flex flex-col lg:flex-row">
 
    <div className="lg:w-2/3">

      <div className="border-b-2 py-4 flex space-x-4">
        <img src={pic1} alt="Article Image" className="w-24 h-24 object-cover" />
        <div>
          <p className="text-sm font-semibold text-yellow-600">BUSINESS</p>
          <h2 className="text-xl font-bold">Top 6 free website mockup tools 2022</h2>
          <p className="text-gray-600 mt-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec.
          </p>
        </div>
      </div>

    
      <div className="border-b-2 py-4 flex space-x-4">
        <img src={pic1} alt="Article Image" className="w-24 h-24 object-cover" />
        <div>
          <p className="text-sm font-semibold text-yellow-600">BUSINESS</p>
          <h2 className="text-xl font-bold">Step-by-step guide to choosing great font pairs</h2>
          <p className="text-gray-600 mt-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec.
          </p>
        </div>
      </div>

      <div className="border-b-2 py-4 flex space-x-4">
        <img src={pic1} alt="Article Image" className="w-24 h-24 object-cover" />
        <div>
          <p className="text-sm font-semibold text-yellow-600">BUSINESS</p>
          <h2 className="text-xl font-bold">Step-by-step guide to choosing great font pairs</h2>
          <p className="text-gray-600 mt-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec.
          </p>
        </div>
      </div>

      <div className="border-b-2 py-4 flex space-x-4">
        <img src={pic1} alt="Article Image" className="w-24 h-24 object-cover" />
        <div>
          <p className="text-sm font-semibold text-yellow-600">BUSINESS</p>
          <h2 className="text-xl font-bold">Step-by-step guide to choosing great font pairs</h2>
          <p className="text-gray-600 mt-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec.
          </p>
        </div>
      </div>

     
    </div>

  
    <div className="lg:w-1/3 lg:pl-8 mt-8 lg:mt-0">
      <div className="bg-gray-100 p-4 rounded">
      
        <h3 className="text-xl font-semibold mb-4">Categories</h3>
        <ul className="space-y-2">
          <li>
            <button className="bg-yellow-400 w-full text-left px-4 py-2 font-semibold text-gray-900">Startup</button>
          </li>
          <li>
            <button className="bg-gray-300 w-full text-left px-4 py-2 font-semibold text-gray-900">Business</button>
          </li>
          <li>
            <button className="bg-gray-300 w-full text-left px-4 py-2 font-semibold text-gray-900">Economy</button>
          </li>
          <li>
            <button className="bg-gray-300 w-full text-left px-4 py-2 font-semibold text-gray-900">Technology</button>
          </li>
        </ul>
      </div>

    
      <div className="mt-8 bg-gray-100 p-4 rounded">
        <h3 className="text-xl font-semibold mb-4">All Tags</h3>
        <div className="flex flex-wrap gap-2">
          <button className="border border-gray-400 px-4 py-2 rounded text-gray-600">Business</button>
          <button className="border border-gray-400 px-4 py-2 rounded text-gray-600">Experience</button>
          <button className="border border-gray-400 px-4 py-2 rounded text-gray-600">Screen</button>
          <button className="border border-gray-400 px-4 py-2 rounded text-gray-600">Technology</button>
          <button className="border border-gray-400 px-4 py-2 rounded text-gray-600">Marketing</button>
          <button className="border border-gray-400 px-4 py-2 rounded text-gray-600">Life</button>
        </div>
      </div>
    </div>
  </div>
</section>



 
    </>
  )
}

export default Picards