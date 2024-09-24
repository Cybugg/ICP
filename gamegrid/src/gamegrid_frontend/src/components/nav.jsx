import {react} from "react";
import {IoMenu} from "react-icons/io5"



function Nav() {
    return (
      <main className=''>
        {/* Mobile */}
        <div className="w-full lg:hidden bg-gray-900 bg-opacity-50 backdrop-blur-2xl z-50 border-b border-b-orange-700">
     <div className="container mx-auto p-5 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
            <div className="p-2  bg-orange-600 rounded-xl">
                <img src="/static/images/logo.png" className="w-4 h-4 md:w-6 md:h-6" alt="logo"/>
            </div>
            <img src="/static/images/logotext.png" className="w-32 md:w-48" />
        </div>
        {/* Menu */}
        <div className="text-orange-600 cursor-pointer bg-gray-600 bg-opacity-50 p-1 rounded-lg">
        <IoMenu />
        </div>
      </div>
        </div>
     

      {/* Desktop */}
      <div className='hidden lg:block bg-gray-900 backdrop-blur-2xl z-50 border-r border-r-orange-900 w-96 h-screen'>

      </div>
      </main>
    );
  }
  
  export default Nav;
  