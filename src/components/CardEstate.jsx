import { FaLocationDot } from "react-icons/fa6";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types'

function CardEstate({property}) {
    const {image, title, segment_name,facilities, area, status, price, location, id}=property
  return (
    <div className="mx-auto w-full flex">
      <div className="card  bg-base-100 shadow-xl flex-grow">
        <figure className="relative">
            <button className="rounded px-3 font-poppins bg-[#2596BE] border-none text-white font-bold text-xl p-[-1px] absolute right-8 top-6">{status}</button>
          <img className="w-full object-fill h-96"
            src={image}
            alt="Shoes"
          />
          <div className="absolute text-xl text-white font-semibold flex gap-2  left-5 bottom-4"><FaLocationDot className="text-[#2596BE] text-3xl" /> <h2>{location}</h2></div>
        </figure>
        <div className="card-body p-4 pb-6">
          <div className="space-y-1">
          <h2 className="card-title font-franklin text-gray-700">{title}</h2>
          <p className="font-poppins text-gray-500">{segment_name} . For {status}</p>
          <p className="font-poppins text-gray-500">{facilities[1]} . {facilities[2]} . {area}</p>
          </div>
          <div className="flex justify-between items-center flex-wrap">
          <p className="font-poppins text-[#2596BE] font-semibold text-xl ">{price}</p>
          <button className="px-3 font-poppins  bg-[#2596BE] hover:bg-gradient-to-r hover:from-[#2596be] hover:to-[#62b4d2] hover:ring-2 hover:ring-offset-2 hover:ring-[#62b4d2] transition-all ease-out duration-300 font-semibold text-xl text-white rounded"><Link to={`/details/${id}`} state={title}>View Property</Link></button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardEstate;

CardEstate.propTypes={
  property:PropTypes.object
}