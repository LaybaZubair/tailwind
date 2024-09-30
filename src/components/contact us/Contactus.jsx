import React from 'react'

function Contactus() {
  return (
   <>
 <section className="contact py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h3 className="text-2xl font-semibold">Contact Us</h3>
          <h1 className="text-4xl font-bold my-4">Let’s Start a Conversation</h1>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore 
            <br /> 
            et dolore magna aliqua. Ut enim ad minim.
          </p>
        </div>

        <div className="flex flex-col md:flex-row justify-center text-white bg-purple-900 py-8 mb-8">
          <div className="w-full md:w-1/2 text-center mb-6 md:mb-0">
            <p className="font-bold">Working hours</p>
            <h5>Monday To Friday</h5>
            <h5>9:00 AM to 8:00 PM</h5>
            <p>Our Support Team is available 24/7</p>
          </div>
          <div className="w-full md:w-1/2 text-center">
            <p className="font-bold">Contact Us</p>
            <h5>020 7993 2905</h5>
            <p>hello@finsweet.com</p>
          </div>
        </div>

        <div className="bg-white p-8 rounded-lg shadow-md">
          <form>
            <div className="mb-4">
              <label htmlFor="fullName" className="block text-gray-700 font-bold mb-2">Full Name</label>
              <input type="text" id="fullName" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-gray-500" placeholder="Full Name" />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Your Email</label>
              <input type="email" id="email" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-gray-500" placeholder="Your Email" />
            </div>
            <div className="mb-4">
              <label htmlFor="query" className="block text-gray-700 font-bold mb-2">Query Related</label>
              <select id="query" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-gray-500">
                <option>Select a Query</option>
                <option value="1">query 1</option>
                <option value="2">query 2</option>
                <option value="3">query 3</option>
              </select>
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-gray-700 font-bold mb-2">Message</label>
              <textarea id="message" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-gray-500" rows="3" placeholder="Message"></textarea>
            </div>
            <button type="submit" className="w-full bg-yellow-500 text-white py-3 rounded-lg hover:bg-yellow-600">Send Message</button>
          </form>
        </div>
      </div>
    </section>
   </>
  )
}

export default Contactus