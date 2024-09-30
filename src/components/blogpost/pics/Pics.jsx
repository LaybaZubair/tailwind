import React from 'react'
import pic1 from "../pics/pic1.webp"
import pic2 from "../pics/pic2.jpeg"
import pic3 from "../pics/pic3.webp"

function Pics() {
  return (
    <>
    <section className="py-12 bg-gray-100">
  <div className="container mx-auto">
    <h2 className="text-2xl font-semibold text-center mb-8">What to read next</h2>
    
   
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      
    
      <div className="bg-white p-6 shadow-lg rounded-lg">
        <img src={pic1} alt="Description of the pic" className="w-full h-48 object-cover mb-4 rounded" />
        <p className="text-gray-500 text-sm mb-2">By John Doe &bull; Aug 23, 2021</p>
        <h3 className="text-xl font-semibold mb-3">A UX Case Study Creating <br /> a Studious Environment <br /> for Students:</h3>
        <p className="text-gray-700">Duis aute irure dolor in reprehenderit in <br /> voluptate velit esse cillum dolore eu fugiat <br /> nulla pariatur. Excepteur sint occaecat.</p>
      </div>

     
      <div className="bg-white p-6 shadow-lg rounded-lg">
        <img src={pic2} alt="Description of the pic" className="w-full h-48 object-cover mb-4 rounded" />
        <p className="text-gray-500 text-sm mb-2">By John Doe &bull; Aug 23, 2021</p>
        <h3 className="text-xl font-semibold mb-3">A UX Case Study Creating <br /> a Studious Environment <br /> for Students:</h3>
        <p className="text-gray-700">Duis aute irure dolor in reprehenderit in <br /> voluptate velit esse cillum dolore eu fugiat <br /> nulla pariatur. Excepteur sint occaecat.</p>
      </div>

    
      <div className="bg-white p-6 shadow-lg rounded-lg">
        <img src={pic3} alt="Description of the pic" className="w-full h-48 object-cover mb-4 rounded" />
        <p className="text-gray-500 text-sm mb-2">By John Doe &bull; Aug 23, 2021</p>
        <h3 className="text-xl font-semibold mb-3">A UX Case Study Creating <br /> a Studious Environment <br /> for Students:</h3>
        <p className="text-gray-700">Duis aute irure dolor in reprehenderit in <br /> voluptate velit esse cillum dolore eu fugiat <br /> nulla pariatur. Excepteur sint occaecat.</p>
      </div>
      
    </div>
  </div>
</section>

    </>
  )
}

export default Pics