import {react} from "react";
import {IoBag, IoMenu} from "react-icons/io5";
import {RiHome6Fill} from "react-icons/ri";
import {GiPlagueDoctorProfile} from "react-icons/gi";
import {MdOutlineGames, MdOutlineLeaderboard} from "react-icons/md";
import { FaScroll } from "react-icons/fa";


function Nav({setActivateSignIn}) {
    return (
      <nav className='relative'>
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
      <div className="container mx-auto p-5 flex items-center justify-between">
        {/* Logo */}
        <div className="flex gap-2 w-full items-center ">
          <div className="flex gap-2 items-center">
            <div className="p-2 bg-orange-600 rounded-xl">
                <img src="/static/images/logo.png" className="h-4 w-4" alt="logo"/>
            </div>
            <img src="/static/images/logotext.png" className="w-32 " />
          </div>
            
        </div>
      </div>
      {/* Nav Links */}
      <ul className="mx-5 text-white mt-5 flex flex-col gap-5 text-xl">
        <li className="hover:text-2xl transition-all ease-in bg-gray-700 p-1 px-5 rounded border border-gray-500 cursor-pointer flex gap-1 items-center "><RiHome6Fill/>Home</li>
        <li className="hover:text-2xl transition-all ease-in p-1 px-5 rounded border border-gray-500 cursor-pointer flex gap-1 items-center "><FaScroll />Quests</li>
        <li className="hover:text-2xl transition-all ease-in p-1 px-5 rounded border border-gray-500 cursor-pointer flex gap-1 items-center "><MdOutlineGames/>Games</li>
        <li className="hover:text-2xl transition-all ease-in p-1 px-5 rounded border border-gray-500 cursor-pointer flex gap-1 items-center "><GiPlagueDoctorProfile />Profile</li>  <li className="hover:text-2xl transition-all ease-in p-1 px-5 rounded border border-gray-500 cursor-pointer flex gap-1 items-center "><MdOutlineLeaderboard/>Leaderboard</li>
        <li className="hover:text-2xl transition-all ease-in p-1 px-5 rounded border border-gray-500 cursor-pointer flex gap-1 items-center "><IoBag />Marketplace</li>
             <button onClick={()=>setActivateSignIn(true)} className="px-5 py-1 mt-96 md:px-8 bg-orange-600 text-white mb-12">Sign in</button>
      </ul>

      </div>
      </nav>
    );
  }
  
  export default Nav;
  