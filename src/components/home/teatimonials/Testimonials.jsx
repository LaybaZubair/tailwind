import React from 'react'

function Testimonials() {
  return (
   <>
<section className='bg-gray-100 py-12'>
        <div className='container mx-auto flex flex-col lg:flex-row items-center lg:justify-between'>
          {/* Left Section */}
          <div className="lg:w-1/2 mb-8 lg:mb-0">
            <p className='text-gray-600 text-lg font-semibold'>Testimonials</p>
            <h1 className='text-4xl font-bold text-gray-900 leading-tight'>
              What People say <br /> about our blogs
            </h1>
            <p className='text-gray-500 mt-4'>
              Lorem ipsum dolor, sit amet consectetur adipisicing <br />
              elit. Molestias ipsum nesciunt veritatis,
            </p>
          </div>

          {/* Right Section */}
          <div className='lg:w-1/2 bg-gray shadow-lg p-8 rounded-lg'>
            <p className='text-gray-600 text-lg mb-4'>
              Lorem ipsum dolor sit amet consectetur, adipisicing <br />
              elit. Error aliquam, voluptatum, tenetur <br />
              magnam maxime corrupti doloribus <br />
              perferendis nam enim quibusdam,
            </p>
            <h1 className='text-2xl font-bold text-gray-900'>Jonathan Vallem</h1>
            <p className='text-gray-500'>New York, USA</p>
          </div>
        </div>
      </section>
   </>
  )
}

export default Testimonials