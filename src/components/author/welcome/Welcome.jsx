import React from 'react'
import author1 from "../welcome/author1.webp"
function Welcome() {
  return (
  <>
  <section className="welcome py-12 bg-gray-100">
  <div className="container mx-auto">
    <div className="top flex flex-col lg:flex-row items-center lg:items-start space-y-6 lg:space-y-0 lg:space-x-8">
    
      <div className="left flex-shrink-0">
        <img src={author1} alt="Description of the image" className="w-40 h-40 lg:w-48 lg:h-48 rounded-full object-cover" />
      </div>

    
      <div className="right text-center lg:text-left">
        <h1 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
          Hey there, I’m Andrew Johnson <br /> and welcome to my Blog
        </h1>
        <p className="text-gray-600 text-lg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor <br />
          incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque <br />
          viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus.
        </p>
      </div>
    </div>
  </div>
</section>

  </>
  )
}

export default Welcome