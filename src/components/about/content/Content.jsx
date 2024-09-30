import React from 'react'

function Content() {
  return (
  <>
  <section className="content py-16">
  <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
 
    <div className="left text-center md:text-left mb-8 md:mb-0 ">
      <p className="text-lg font-semibold text-gray-700 ">ABOUT US</p>
      <h1 className="text-4xl font-bold text-gray-900 ">
        We are a team of <br className="hidden md:block" /> content writers who  share their learnings
      </h1>
    </div>

    <div className="right text-center md:text-left">
      <p className="text-gray-600 ">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </p>
    </div>
  </div>
</section>

  </>
  )
}

export default Content