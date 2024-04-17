import { FaCartFlatbed } from "react-icons/fa6";
// import { FaSackDollar } from "react-icons/fa6";

function State() {
  return (
    <div className="mx-auto lg:w-4/5">

 <div className="shadow mx-auto grid lg:grid-cols-4 md:grid-cols-2 gap-4 p-5">
  
  <div className="stat border-2 rounded-xl border-teal-400" data-aos="flip-left"
     data-aos-easing="linear"
     data-aos-duration="500">
    <div className="stat-title font-semibold text-base font-franklin">Available Site</div>
    <div className="stat-value text-primary text-center">256</div>
  </div>
  
  <div className="stat border-2 rounded-xl border-teal-400" data-aos="flip-left"
     data-aos-easing="linear"
     data-aos-duration="500">
    
    <div className="stat-title font-semibold text-base font-franklin">Years of Experience</div>
    <div className="stat-value text-secondary text-center">21</div>
  </div>
  
  <div className="stat border-2 rounded-xl border-teal-400" data-aos="flip-left"
     data-aos-easing="linear"
     data-aos-duration="500"> 
    <div className="stat-title font-semibold text-base font-franklin">Positive Feedback</div>
    <div className="stat-value text-teal-600 text-center"> 99 %</div>
  </div>

  <div className="stat border-2 rounded-xl border-teal-400" data-aos="flip-left"
     data-aos-easing="linear"
     data-aos-duration="500">
    <div className="stat-title font-semibold text-base font-franklin">Portfolio Value</div>
    <div className="stat-value text-secondary text-center">9B</div>
  </div>
  
</div>
<div className="flex-col mx-auto text-center my-10 justify-center items-center ">
  <div className="inline-block" data-aos="zoom-out"
     data-aos-easing="linear"
     data-aos-delay="500"><FaCartFlatbed className="text-[300px] text-violet-900"/></div>
  <h1 className="text-teal-600 font-franklin font-bold text-3xl">You have not booking yet</h1>
</div>
    </div>
  )
}

export default State