import {react, useState} from "react";
import {IoBag, IoMenu} from "react-icons/io5";
import {RiHome6Fill} from "react-icons/ri";
import {GiPlagueDoctorProfile} from "react-icons/gi";
import {MdOutlineGames, MdOutlineLeaderboard} from "react-icons/md";
import { FaScroll } from "react-icons/fa";
import { useInternetIdentity } from "ic-use-internet-identity";

function Nav({setActivateSignIn}) {
  const { isLoggingIn, login, clear, identity } = useInternetIdentity();
  const [showNav,setShowNav] = useState(false);
  const toggleNav = ()=>{
    setShowNav(prev => !prev);
    console.log("toggled!")
  }



    return (
      <nav className='relative'>
        {/* -----------Mobile--------- */}
        <div className="w-full lg:hidden bg-gray-900 bg-opacity-50 backdrop-blur-2xl z-50 border-b border-b-orange-700">
     <div className="container mx-auto p-5 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
            <div className="p-2  bg-orange-600 rounded-xl">
                <img src="/static/images/logo.png" className="w-4 h-4 md:w-6 md:h-6" alt="logo"/>
            </div>
            <img src="/static/images/logotext.png" className="w-32 md:w-48" />
        </div>

        <div className="flex gap-2">
      {/* Principal */}
     { identity && !showNav && <div className=" bg-gray-700 text-sm text-white p-1 px-5 rounded-full">
          0x4w..5f7
        </div>}
        {/* Menubar*/}
        <div className="text-orange-600 cursor-pointer bg-gray-600 bg-opacity-50 p-1 rounded-lg" onClick={toggleNav}>
        <IoMenu />
        </div>
        </div>
      </div>
        </div>

        {/* ---------Mobile Nav Display----- */}
     {  showNav && <div className=' lg:hidden bg-gray-900 backdrop-blur-2xl z-50 border-r border-r-orange-900 w-full h-[100%] fixed'>
      <div className="container mx-auto p-5 flex items-center justify-between">
       
      </div>
      {/* Nav Links */}
      <ul className="mx-5 text-white mt-5 flex  flex-col gap-5 text-xl  justify-center">
        <li className="hover:text-2xl transition-all ease-in bg-gray-700 p-1 px-5 rounded border border-gray-500 cursor-pointer flex gap-1 items-center "><RiHome6Fill/>Home</li>
        <li className="hover:text-2xl transition-all ease-in p-1 px-5 rounded border border-gray-500 cursor-pointer flex gap-1 items-center "><FaScroll />Quests</li>
        <li className="hover:text-2xl transition-all ease-in p-1 px-5 rounded border border-gray-500 cursor-pointer flex gap-1 items-center "><MdOutlineGames/>Games</li>
        <li className="hover:text-2xl transition-all ease-in p-1 px-5 rounded border border-gray-500 cursor-pointer flex gap-1 items-center "><GiPlagueDoctorProfile />Profile</li>  <li className="hover:text-2xl transition-all ease-in p-1 px-5 rounded border border-gray-500 cursor-pointer flex gap-1 items-center text-gray-400"><MdOutlineLeaderboard/>Leaderboard <span className="italic text-sm text-orange-600 ml-5">Locked</span></li>
        <li className="hover:text-2xl transition-all ease-in p-1 px-5 rounded border border-gray-500 cursor-pointer flex gap-1 items-center text-gray-400"><IoBag />Marketplace<span className="italic text-sm text-orange-600 ml-5">Locked</span></li>
        {/* Principal */}
     {  identity && <div className=" bg-gray-700 p-1 px-5 self-center rounded-full mt-64">
          0x4w..5f7
        </div>}
        {/* Authentication */}
            {identity?<button onClick={()=>{clear();
              localStorage.clear();}} className="px-5 py-1  md:px-8 bg-orange-700 text-white mb-12">Logout</button> :<button onClick={()=>setActivateSignIn(true)} className="px-5 py-1 m md:px-8 bg-orange-600 text-white mb-12">Sign in</button>}
      </ul>

      </div>
}

     

      {/* Desktop */}
      <div className='hidden lg:block bg-gray-900 backdrop-blur-2xl z-50 border-r border-r-orange-900 w-96 h-screen'>
      <div className="container mx-auto p-5 flex items-center justify-between">
        {/* Logo */}
        <div className="flex gap-2 w-full items-center ">
          <div className="flex gap-2 items-center">
            <div className="p-2 bg-orange-600 rounded-xl">
                <img src="/static/images/logo.png" className="h-5 w-5" alt="logo"/>
            </div>
            <img src="/static/images/logotext.png" className="w-32 " />
          </div>
            
        </div>
      </div>
      {/* Nav Links */}
      <ul className="mx-5 text-white mt-5 flex  flex-col gap-5 text-xl  justify-center">
        <li className="hover:text-2xl transition-all ease-in bg-gray-700 p-1 px-5 rounded border border-gray-500 cursor-pointer flex gap-1 items-center "><RiHome6Fill/>Home</li>
        <li className="hover:text-2xl transition-all ease-in p-1 px-5 rounded border border-gray-500 cursor-pointer flex gap-1 items-center "><FaScroll />Quests</li>
        <li className="hover:text-2xl transition-all ease-in p-1 px-5 rounded border border-gray-500 cursor-pointer flex gap-1 items-center "><MdOutlineGames/>Games</li>
        <li className="hover:text-2xl transition-all ease-in p-1 px-5 rounded border border-gray-500 cursor-pointer flex gap-1 items-center "><GiPlagueDoctorProfile />Profile</li>  <li className="hover:text-2xl transition-all ease-in p-1 px-5 rounded border border-gray-500 cursor-pointer flex gap-1 items-center text-gray-400"><MdOutlineLeaderboard/>Leaderboard <span className="italic text-sm text-orange-600 ml-5">Locked</span></li>
        <li className="hover:text-2xl transition-all ease-in p-1 px-5 rounded border border-gray-500 cursor-pointer flex gap-1 items-center text-gray-400"><IoBag />Marketplace<span className="italic text-sm text-orange-600 ml-5">Locked</span></li>
        {/* Principal */}
     {  identity && <div className=" bg-gray-700 p-1 px-5 self-center rounded-full mt-80">
          0x4w..5f7
        </div>}
        {/* Authentication */}
            {identity?<button onClick={()=>{clear();
              localStorage.clear();}} className="px-5 py-1  md:px-8 bg-orange-700 text-white mb-12">Logout</button> :<button onClick={()=>setActivateSignIn(true)} className="px-5 py-1 mt-96 md:px-8 bg-orange-600 text-white mb-12">Sign in</button>}
      </ul>

      </div>
      </nav>
    );
  }
  
  export default Nav;
  