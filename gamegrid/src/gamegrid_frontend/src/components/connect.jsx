import {react} from "react";




function Connect() {
    return (
      <section className='absolute flex items-center justify-center w-full h-screen bg-black bg-opacity-70'>
       <div className="bg-gray-900 text-center text-white gap-2 flex flex-col items-center justify-center mx-5 p-8 py-12 max-w-[36rem] border border-gray-600 hover:border-gray-500 transition-all ease-in rounded" style={{
        background:"url(/static/images/connect.png)",
        backgroundSize:"cover"
       }}>
        {/* heading */}
        <div className="font-semibold">
            Connect With a Passkey
        </div>
        {/* Paragraph */}
        <div className="text-sm">
        Internet Identity has a built-in verifiable credential (VC) protocol, which is unique because it is walletless and privacy-preserving. 
        </div>
        {/* CTA Button */}
        <button className="bg-white mt-5 font-semibold text-black flex gap-2 items-center font-serif px-5 m-3 rounded border border-gray-700">
        <img src="/static/images/icp.jpeg" alt="icp" className="w-8 h-6" /> Internet Identity
        </button>
       </div>
      </section>
    );
  }
  
  export default Connect;
  