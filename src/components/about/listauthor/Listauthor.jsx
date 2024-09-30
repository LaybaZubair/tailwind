import React from 'react';
import first from "../listauthor/first.jpeg"
import two from "../listauthor/two.png"
import three from "../listauthor/three.webp"
import second from "../listauthor/second.jpeg"
import pic7 from "../listauthor/pic7.webp"
import pic8 from "../listauthor/pic8.webp"
const AuthorList = () => {
  return (
    <div className="container mx-auto px-4 py-12">
    <h2 className="text-3xl font-semibold text-center mb-8">List of Authors</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
 
      <div className="bg-slate-200 p-6 rounded-lg shadow-lg">
        <img
          src={first}
          alt="Floyd Miles"
          className="w-32 h-32 rounded-full mx-auto mb-4"
        />
        <h3 className="text-xl font-bold text-center">Floyd Miles</h3>
        <p className="text-center text-gray-500 mb-4">Content Writer @Company</p>
        <div className="flex justify-center space-x-4">
     
        </div>
      </div>
  
  
      <div className="bg-pink-100 p-6 rounded-lg shadow-lg">
        <img
          src={two}
          alt="Dianne Russell"
          className="w-32 h-32 rounded-full mx-auto mb-4"
        />
        <h3 className="text-xl font-bold text-center">Dianne Russell</h3>
        <p className="text-center text-gray-500 mb-4">Content Writer @Company</p>
        <div className="flex justify-center space-x-4">
      
        </div>
      </div>
  

      <div className="bg-slate-200 p-6 rounded-lg shadow-lg">
        <img
          src={three}
          alt="Jenny Wilson"
          className="w-32 h-32 rounded-full mx-auto mb-4"
        />
        <h3 className="text-xl font-bold text-center">Jenny Wilson</h3>
        <p className="text-center text-gray-500 mb-4">Content Writer @Company</p>
        <div className="flex justify-center space-x-4">
        
        </div>
      </div>
  

      <div className="bg-slate-200 rounded-lg shadow-lg">
        <img
          src={second}
          alt="Jenny Wilson"
          className="w-32 h-32 rounded-full mx-auto mb-4"
        />
        <h3 className="text-xl font-bold text-center">Leslie Alexander</h3>
        <p className="text-center text-gray-500 mb-4">Content Writer @Company</p>
        <div className="flex justify-center space-x-4">
        
        </div>
      </div>
   
      <div className="bg-slate-200 p-6 rounded-lg shadow-lg">
        <img
          src={two}
          alt="Jenny Wilson"
          className="w-32 h-32 rounded-full mx-auto mb-4"
        />
        <h3 className="text-xl font-bold text-center">Jenny Wilson</h3>
        <p className="text-center text-gray-500 mb-4">Content Writer @Company</p>
        <div className="flex justify-center space-x-4">
        
        </div>
      </div>

      <div className="bg-slate-200 p-6 rounded-lg shadow-lg">
        <img
          src={three}
          alt="Jenny Wilson"
          className="w-32 h-32 rounded-full mx-auto mb-4"
        />
        <h3 className="text-xl font-bold text-center">Jenny Wilson</h3>
        <p className="text-center text-gray-500 mb-4">Content Writer @Company</p>
        <div className="flex justify-center space-x-4">
        
        </div>
      </div>

      <div className="bg-slate-200 p-6 rounded-lg shadow-lg">
        <img
          src={pic8}
          alt="Jenny Wilson"
          className="w-32 h-32 rounded-full mx-auto mb-4"
        />
        <h3 className="text-xl font-bold text-center">Jacob Jones</h3>
        <p className="text-center text-gray-500 mb-4">Content Writer @Company</p>
        <div className="flex justify-center space-x-4">
        
        </div>
      </div>

      <div className="bg-slate-200 p-6 rounded-lg shadow-lg">
        <img
          src={pic7}
          alt="Jenny Wilson"
          className="w-32 h-32 rounded-full mx-auto mb-4"
        />
        <h3 className="text-xl font-bold text-center">Robert Fox</h3>
        <p className="text-center text-gray-500 mb-4">Content Writer @Company</p>
        <div className="flex justify-center space-x-4">
        
        </div>
      </div>

    </div>
    

  </div>
  
  );
};

export default AuthorList;
