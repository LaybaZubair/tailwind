import React, { useState } from "react"; 
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <span className="text-lg font-bold text-white">{`{Finsweet}`}</span>
          </div>

          <div className="hidden md:flex space-x-4">
            <NavLink 
              to="/home" 
              className={({ isActive }) => isActive ? "text-white bg-gray-700 px-3 py-2 rounded-md text-sm font-medium" : "text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium"}
            >
              Home
            </NavLink>

            <NavLink 
              to="/blog" 
              className={({ isActive }) => isActive ? "text-white bg-gray-700 px-3 py-2 rounded-md text-sm font-medium" : "text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium"}
            >
              Blog
            </NavLink>
            <NavLink 
              to="/blogpost" 
              className={({ isActive }) => isActive ? "text-white bg-gray-700 px-3 py-2 rounded-md text-sm font-medium" : "text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium"}
            >
              Blogpost
            </NavLink>
            <NavLink 
              to="/about" 
              className={({ isActive }) => isActive ? "text-white bg-gray-700 px-3 py-2 rounded-md text-sm font-medium" : "text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium"}
            >
              About Us
            </NavLink>

            <NavLink 
              to="/category" 
              className={({ isActive }) => isActive ? "text-white bg-gray-700 px-3 py-2 rounded-md text-sm font-medium" : "text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium"}
            >
            Category
            </NavLink>

            <NavLink 
              to="/author" 
              className={({ isActive }) => isActive ? "text-white bg-gray-700 px-3 py-2 rounded-md text-sm font-medium" : "text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium"}
            >
          Author
            </NavLink>

            <NavLink 
              to="/contactus" 
              className={({ isActive }) => isActive ? "text-white bg-gray-700 px-3 py-2 rounded-md text-sm font-medium" : "text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium"}
            >
        Contact Us
            </NavLink>
          

          </div>

     
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg
                  className="block h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="space-y-1 px-2 pb-3 pt-2">
            <NavLink 
              to="/home" 
              className="block text-white hover:bg-gray-700 px-3 py-2 rounded-md text-base font-medium"
              onClick={toggleMenu} 
            >
              Home
            </NavLink>

            <NavLink 
              to="/blog" 
              className="block text-white hover:bg-gray-700 px-3 py-2 rounded-md text-base font-medium"
              onClick={toggleMenu} 
            >
              Blog
            </NavLink>

            <NavLink 
              to="/about" 
              className="block text-white hover:bg-gray-700 px-3 py-2 rounded-md text-base font-medium"
              onClick={toggleMenu} 
            >
              About Us
            </NavLink>

            
            <NavLink 
              to="/category" 
              className="block text-white hover:bg-gray-700 px-3 py-2 rounded-md text-base font-medium"
              onClick={toggleMenu} 
            >
              Category
            </NavLink>

            <NavLink 
              to="/author" 
              className="block text-white hover:bg-gray-700 px-3 py-2 rounded-md text-base font-medium"
              onClick={toggleMenu} 
            >
             Author
            </NavLink>

           
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
