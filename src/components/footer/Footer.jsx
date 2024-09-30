import React from 'react'

function Footer() {
  return (
    <>
      <section className="bg-gray-900 py-12">
        <div className="container mx-auto px-4">
          {/* Top Section */}
          <div className="flex flex-col lg:flex-row justify-between items-center mb-8">
            <div className="text-white text-3xl font-bold">
              <h2>Finsweet</h2>
            </div>
            <div>
              <ul className="flex space-x-4 text-white">
                <li className="hover:text-yellow-400 cursor-pointer">home</li>
                <li className="hover:text-yellow-400 cursor-pointer">blog</li>
                <li className="hover:text-yellow-400 cursor-pointer">aboutus</li>
                <li className="hover:text-yellow-400 cursor-pointer">contactus</li>
                <li className="hover:text-yellow-400 cursor-pointer">privacypolicy</li>
              </ul>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
            <div className="text-white text-xl lg:w-1/2">
              <h1>Subscribe to our newsletter to get the latest updates and news</h1>
            </div>
            <div className="flex space-x-4 lg:w-1/2 justify-end">
              <input 
                type="email" 
                placeholder="Enter Your Email" 
                className="px-4 py-2 rounded-md text-gray-800 focus:outline-none w-2/3"
              />
              <button 
                type="button" 
                className="bg-yellow-500 text-white px-4 py-2 rounded-md hover:bg-yellow-400 transition">
                Subscribe Us
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Footer