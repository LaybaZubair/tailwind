import React from 'react'
import first from "../list/first.jpeg"
import two from "../list/two.png"
import three from "../list/two.png"
import second from "../list/second.jpeg"
function List() {
  return (
    <>
    <section className="py-10 bg-gray-50">
  <div className="container mx-auto">
    <div className="text-center mb-8">
      <h1 className="text-3xl font-bold text-gray-800">List of Authors</h1>
    </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
      <div className="bg-white p-6 rounded-lg shadow-md">
        <img src={first} alt="Floyd Miles" className="w-100 h-100 object-cover rounded-lg mb-4" />
        <h3 className="text-xl font-semibold text-gray-700">Floyd Miles</h3>
        <p className="text-gray-500">Content writer @company</p>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <img src={two} alt="Dianne Russell" className="w-100 h-100 object-cover rounded-lg mb-4" />
        <h3 className="text-xl font-semibold text-gray-700">Dianne Russell</h3>
        <p className="text-gray-500">Content writer @company</p>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <img src={three} alt="Jenny Wilson" className="w-100 h-100++++++++++ object-cover rounded-lg mb-4" />
        <h3 className="text-xl font-semibold text-gray-700">Jenny Wilson</h3>
        <p className="text-gray-500">Content writer @company</p>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <img src={second} alt="Leslie Alexander" className="w-100 h-100 object-cover rounded-lg mb-4" />
        <h3 className="text-xl font-semibold text-gray-700">Leslie Alexander</h3>
        <p className="text-gray-500">Content writer @company</p>
      </div>
    </div>
  </div>
</section>

    </>
  )
}

export default List