import React from 'react'
import group from "../group/group.jpeg"
function Grop() {
  return (
<>
<section className="py-10 bg-white">
        <div className="container mx-auto flex flex-col md:flex-row items-center md:items-start space-y-8 md:space-y-0 md:space-x-8 px-4">
         

          <div className="md:w-1/2">
            <img
              src={group}
              alt="Description of the image"
              className="w-full rounded-lg shadow-lg"
            />
          </div>

          <div className="md:w-1/2 text-center mb-12 md:text-left ">
            <p className="text-lg font-semibold text-black-600">
            Why we started this Blog
            </p>
            <p className="text-2xl font-bold text-black-9 my-4">
              Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit,
              sed do eiusmod <br /> tempor incididunt.
            </p>
            <p className="text-black-400 mb-6">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum
              nisi voluptas consequuntur laudantium magni, inventore delectus
              dolorum voluptates quis atque, ex facilis quisquam enim ullam eum
              a, id dolor reprehenderit.
            </p>
          </div>


        </div>
      </section>
</>
  )
}

export default Grop