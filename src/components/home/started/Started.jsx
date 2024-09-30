import React from 'react'
import beach from "../started/beachh.webp"
function Started() {
  return (
    <>
    <section className="py-10 bg-white">
  <div className="container mx-auto flex flex-col md:flex-row items-center md:items-start space-y-8 md:space-y-0 md:space-x-8 px-4">
    <div className="md:w-1/2">
      <img
        src={beach}
        alt="Description of the image"
        className="w-full rounded-lg shadow-lg"
      />
    </div>
    <div className="md:w-1/2 text-center md:text-left">
      <p className="text-lg font-semibold text-gray-600">Why we started</p>
      <h1 className="text-4xl font-bold text-gray-800 my-4">
        It started out as a simple <br />
        idea and evolved into <br />
        our passion
      </h1>
      <p className="text-gray-600 mb-6">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum nisi
        voluptas consequuntur laudantium magni, inventore delectus dolorum
        voluptates quis atque, ex facilis quisquam enim ullam eum a, id dolor
        reprehenderit.
      </p>
      <button type="button" className="btn bg-yellow-500 hover:bg-yellow-600 text-white py-2 px-4 rounded">
        Read more
      </button>
    </div>
  </div>
</section>

    </>
  )
}

export default Started