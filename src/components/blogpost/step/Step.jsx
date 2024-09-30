import React from 'react'
import womwn from "../step/womwn.webp"
function Step() {
  return (
   <>
<section className="step py-12">
  <div className="container mx-auto px-4 max-w-5xl">

    <div className="top mb-8">
      <h2 className="text-lg font-bold text-gray-700">Andrew Jonson</h2>
      <p className="text-sm text-gray-500">Posted on 27th January 2022</p>
      <h1 className="text-4xl font-extrabold text-gray-900 leading-tight mt-2">
        Step-by-step guide to choosing <br /> great font pairs
      </h1>
      <h3 className="text-xl font-semibold text-indigo-600 mt-2">Startup</h3>
    </div>


    <div className="center my-8">
      <img
        src={womwn}
        alt="Description of the image"
        className="w-full h-auto object-cover rounded-lg shadow-lg"
      />
    </div>

    <div className="bottom space-y-8">
      <h2 className="text-2xl font-semibold text-gray-900">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur facere exercitationem illo.
      </h2>

      <p className="leading-relaxed text-gray-600">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit
        massa enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus. Sociis natoque penatibus et magnis dis
        parturient montes. Ridiculus mus mauris vitae ultricies leo. Neque egestas congue quisque egestas diam. Risus in hendrerit gravida rutrum
        quisque non.
      </p>

      <h2 className="text-xl font-semibold text-gray-900">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.
      </h2>

      <p className="leading-relaxed text-gray-600">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit
        massa enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus. Sociis natoque penatibus et magnis dis
        parturient montes. Ridiculus mus mauris vitae ultricies leo. Neque egestas congue quisque egestas diam. Risus in hendrerit gravida rutrum
        quisque non.
      </p>

      <ul className="list-disc list-inside text-gray-600 space-y-2">
        <li>Lorem ipsum dolor sit amet</li>
        <li>Non blandit massa enim nec scelerisque</li>
        <li>Neque egestas congue quisque egestas</li>
      </ul>

      <p className="leading-relaxed text-gray-600">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit
        massa enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus. Sociis natoque penatibus et magnis dis
        parturient montes. Ridiculus mus mauris vitae ultricies leo. Neque egestas congue quisque egestas diam. Risus in hendrerit gravida rutrum
        quisque non.
      </p>

      <h2 className="text-xl font-semibold text-gray-900">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.
      </h2>

      <p className="leading-relaxed text-gray-600">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit
        massa enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus. Sociis natoque penatibus et magnis dis
        parturient montes. Ridiculus mus mauris vitae ultricies leo. Neque egestas congue quisque egestas diam. Risus in hendrerit gravida rutrum
        quisque non.
      </p>
    </div>
  </div>
</section>


   </>
  )
}

export default Step