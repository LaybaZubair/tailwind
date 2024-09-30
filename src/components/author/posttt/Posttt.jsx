import React from 'react'
import back from "../posttt/back.jpeg"
import gggg from "../posttt/gggg.webp"
function Posttt() {
  return (
   <>
   <section className="posttt py-12 bg-gray-100">
        <div className="container mx-auto">
       
          <div className="top flex flex-col lg:flex-row space-y-8 lg:space-y-0 lg:space-x-12">

  <div className="left w-full lg:w-1/2">
    <h1 className="heading text-4xl font-bold mb-6">All Post</h1>
    <img src={back} alt="Business skyscrapers" className="w-full h-80 object-cover rounded-md" />
  </div>
  <div className="right  lg: w-full lg:w-1/2v ">
    <h3 className="text-lg font-semibold text-purple-600 ">BUSINESS</h3>
    <h1 className="heading text-3xl font-bold text-gray-800 mb-4">
      Font sizes in UI design: The <br /> complete guide to follow
    </h1>
    <p className="text-gray-600 text-lg leading-relaxed">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor <br />
      incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque <br />
      viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus.
    </p>
  </div>
</div>


<div className="bottom flex flex-col lg:flex-row space-y-8 lg:space-y-0 lg:space-x-12 mt-10">
  <div className="left w-full lg:w-1/2">
    <img src={gggg} alt="Team working" className="w-full h-auto object-cover rounded-md" />
  </div>
  <div className="right mt-4 lg:mt-0 w-full lg:w-1/2">
    <h3 className="text-lg font-semibold text-purple-600">ECONOMY</h3>
    <h1 className="heading text-3xl font-bold text-gray-800 mb-4">
      How to build rapport with your <br /> web design clients
    </h1>
    <p className="text-gray-600 text-lg leading-relaxed">
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

export default Posttt