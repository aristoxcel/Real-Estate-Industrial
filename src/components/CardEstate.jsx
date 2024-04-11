import { FaLocationDot } from "react-icons/fa6";
import { Link } from "react-router-dom";

function CardEstate({property}) {
    const {image, title, segment_name,facilities, area, status, price, location, id}=property
  return (
    <div className="mx-auto w-full">
      <div className="card  bg-base-100 shadow-xl">
        <figure className="relative">
            <button className="btn font-poppins bg-[#2596BE] border-none text-white font-bold text-xl p-[-1px] absolute right-8 top-6">{status}</button>
          <img className="w-full object-contain"
            src={image}
            alt="Shoes"
          />
          <div className="absolute text-xl text-white font-semibold flex gap-2  left-5 bottom-4"><FaLocationDot className="text-[#2596BE] text-3xl" /> <h2>{location}</h2></div>
        </figure>
        <div className="card-body">
          <div >
          <h2 className="card-title font-franklin text-gray-700">{title}</h2>
          <p className="font-poppins text-gray-500">{segment_name} . For {status}</p>
          <p className="font-poppins text-gray-500">{facilities[1]} . {facilities[2]} . {area}</p>
          </div>
          <div className="flex justify-between items-center">
          <p className="font-poppins text-[#2596BE] font-semibold text-xl ">{price}</p>
          <button className="btn bg-[#2596BE] font-semibold text-xl text-white"><Link to={`/details/${id}`}>View Property</Link></button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardEstate;
