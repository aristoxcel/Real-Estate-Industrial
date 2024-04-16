import { FaCartFlatbed } from "react-icons/fa6";
import { FaSackDollar } from "react-icons/fa6";

function State() {
  return (
    <div className="mx-auto lg:w-4/5">

 <div className="shadow mx-auto grid lg:grid-cols-4 md:grid-cols-2 gap-4 p-5">
  
  <div className="stat border-2 rounded-xl border-teal-400">
    <div className="stat-figure text-primary">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
    </div>
    <div className="stat-title font-semibold text-lg font-franklin">Available Site</div>
    <div className="stat-value text-primary">256</div>
  </div>
  
  <div className="stat border-2 rounded-xl border-teal-400">
    <div className="stat-figure text-secondary">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
    </div>
    <div className="stat-title font-semibold text-lg font-franklin">Years of Experience</div>
    <div className="stat-value text-secondary">From 1996</div>
  </div>
  
  <div className="stat border-2 rounded-xl border-teal-400">
    <div className="stat-figure text-secondary">
      <div className="avatar online">
        <div className="w-16 rounded-full">
          <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
        </div>
      </div>
    </div>
    <div className="stat-title font-semibold text-lg font-franklin">Positive Feedback</div>
    <div className="stat-value text-teal-600"> 99 %</div>
  </div>

  <div className="stat border-2 rounded-xl border-teal-400">
    <div className="stat-figure text-secondary">
      
        <div className=" rounded-full p-2">
        <FaSackDollar className="text-5xl text-teal-800"/>
        </div>
      
    </div>
    <div className="stat-title">Portfolio Value</div>
    <div className="stat-value text-secondary">9 B</div>
  </div>
  
</div>
<div className="flex-col mx-auto text-center my-10 justify-center items-center ">
  <div className="inline-block"><FaCartFlatbed className="text-[300px] text-violet-900"/></div>
  <h1 className="text-teal-600 font-franklin font-bold text-3xl">You have not booking yet</h1>
</div>
    </div>
  )
}

export default State