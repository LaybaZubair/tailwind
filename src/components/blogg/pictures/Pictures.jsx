import React from 'react'
import pic1 from "./pic1.webp"
import pic2 from "../pictures/pic2.jpeg"
import pic3 from "../pictures/pic3.webp"

function Pictures() {
  return (
  <>
        <section className="bg-gray-100 py-8">
       
      <div className="container mx-auto px-4">
      <h1 className='text-xl font-bold text-black-500'>All Post</h1>
      {/* picture 1 */}
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
     
          <div className="md:flex">
       
            <div className="md:w-1/2">
              <img
                src={pic1} X
                alt="Featured Post"
                className="w-full h-full object-cover"
              />
            </div>

       
            <div className="md:w-1/2 p-6 flex flex-col justify-between mb-4">
              <div >
                <h2 className="text-gray-900 text-sm uppercase font-semibold mt-20">
                Startup
                </h2>
                <h1 className="text-2xl font-bold text-gray-900 mb-4">
                Design tips for designers that cover everything you need
                </h1>
                <p className="text-gray-700 mb-6">
                  Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident.
                </p>
              </div>
           
            </div>

          </div>
        </div>

{/* picture 2 */}
        <div className="bg-white shadow-md rounded-lg overflow-hidden mt-16">
     
     <div className="md:flex">
  
       <div className="md:w-1/2">
         <img
           src={pic2} X
           alt="Featured Post"
           className="w-full h-full object-cover"
         />
       </div>

  
       <div className="md:w-1/2 p-6 flex flex-col justify-between mb-4">
         <div >
           <h2 className="text-gray-500 text-sm uppercase font-semibold mt-20">
        Business
           </h2>
           <h1 className="text-2xl font-bold text-gray-900 mb-4">
           How to build rapport with your web design clients
           </h1>
           <p className="text-gray-700 mb-6">
             Duis aute irure dolor in reprehenderit in voluptate velit esse
             cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
             cupidatat non proident.
           </p>
         </div>
      
       </div>

     </div>
   </div>

{/* picture 3*/}
<div className="bg-white shadow-md rounded-lg overflow-hidden mt-16">
     
     <div className="md:flex">
  
       <div className="md:w-1/2">
         <img
           src={pic3} X
           alt="Featured Post"
           className="w-full h-full object-cover"
         />
       </div>

  
       <div className="md:w-1/2 p-6 flex flex-col justify-between mb-4">
         <div >
           <h2 className="text-gray-500 text-sm uppercase font-semibold mt-20">
       Startup
           </h2>
           <h1 className="text-2xl font-bold text-gray-900 mb-4">
           Logo design trends to avoid in 2022
           </h1>
           <p className="text-gray-700 mb-6">
             Duis aute irure dolor in reprehenderit in voluptate velit esse
             cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
             cupidatat non proident.
           </p>
         </div>
      
       </div>

     </div>
   </div>
{/* picture 4*/}
<div className="bg-white shadow-md rounded-lg overflow-hidden mt-16">
     
     <div className="md:flex">
  
       <div className="md:w-1/2">
         <img
           src={pic2} X
           alt="Featured Post"
           className="w-full h-full object-cover"
         />
       </div>

  
       <div className="md:w-1/2 p-6 flex flex-col justify-between mb-4">
         <div >
           <h2 className="text-gray-500 text-sm uppercase font-semibold mt-20">
       Technology
           </h2>
           <h1 className="text-2xl font-bold text-gray-900 mb-4">
           8 Figma design systems that you can download for free today
           </h1>
           <p className="text-gray-700 mb-6">
             Duis aute irure dolor in reprehenderit in voluptate velit esse
             cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
             cupidatat non proident.
           </p>
         </div>
      
       </div>

     </div>
   </div>
{/* picture 5*/}
   <div className="bg-white shadow-md rounded-lg overflow-hidden mt-16">
     
     <div className="md:flex">
  
       <div className="md:w-1/2">
         <img
           src={pic1} X
           alt="Featured Post"
           className="w-full h-full object-cover"
         />0000
       </div>

  
       <div className="md:w-1/2 p-6 flex flex-col justify-between mb-4">
         <div >
           <h2 className="text-gray-500 text-sm uppercase font-semibold mt-20">
       Economy
           </h2>
           <h1 className="text-2xl font-bold text-gray-900 mb-4">
           Font size in UI design:The compolete guide to follow
           </h1>
           <p className="text-gray-700 mb-6">
             Duis aute irure dolor in reprehenderit in voluptate velit esse
             cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
             cupidatat non proident.
           </p>
         </div>
      
       </div>

     </div>
   </div>

      </div>

    </section>
  </>
  )
}

export default Pictures