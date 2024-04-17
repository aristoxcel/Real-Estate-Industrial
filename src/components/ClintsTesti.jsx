function ClintsTesti() {
  return (
    <div className="lg:w-4/5 mx-auto my-20 px-5">
      <div className="grid lg:grid-cols-5 md:grid-cols-1 gap-4">
        <div className="col-span-2  h-72 space-y-3 py-10 my-auto " data-aos="fade-left"
    data-aos-easing="ease-in-sine"
    data-aos-duration="300">
          <h3 className="uppercase font-franklin font-medium text-lg opacity-70">
            <span className="text-orange-500">__</span> Reviews
          </h3>
          <h1 className="font-poppins text-3xl font-semibold opacity-80 pb-2">
            Clients Testimonial
          </h1>
          <p className="  lg:pr-10 opacity-60 font-poppins ">
            We are very proud of the service we provide. See what our guests
            have to say about us, our locations and perfect real estate
            services.{" "}
          </p>
          <button className="px-3 font-poppins  bg-[#2596BE] hover:bg-gradient-to-r hover:from-[#2596be] hover:to-[#62b4d2] hover:ring-2 hover:ring-offset-2 hover:ring-[#62b4d2] transition-all ease-out duration-300 font-semibold text-xl text-white rounded">
            {" "}
            Contact us
          </button>
        </div>
        <div className="col-span-3  gap-3 grid md:grid-cols-2 grid-cols-1">
          <div className="grid-cols-1 ">
            <div className="card  bg-base-100 shadow-xl rounded-none" data-aos="fade-right"
     data-aos-easing="ease-in-sine"
     data-aos-delay="200">
              <figure className="px-10 pt-10">
                <img
                  src={"pic.jpg"}
                  alt="Shoes"
                  className="rounded-full w-28 h-28"
                />
              </figure>
              <div className="card-body items-center text-center">
                <div className="rating">
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                    
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                    checked
                  />
                </div>
                <p className="font-poppins opacity-60 font-medium text-sm py-7 text-balance"> "Landmark Industrial Group exceeded our expectations, securing a perfect industrial space for our expanding operations. Their expertise and support were invaluable, guiding us through every step of the process. Highly recommended !"</p>
                <p className="px-7 font-franklin opacity-90 font-semibold text-sm">Johnathan Smith, CEO of Tech Solutions Inc.</p>
              </div>
            </div>
          </div>
          <div className="grid-cols-1  ">
          <div className="card  bg-base-100 rounded-none shadow-xl" data-aos="fade-right"
     data-aos-easing="ease-in-sine"
     data-aos-delay="400" >
              <figure className="px-10 pt-10">
                <img
                  src={"pic3.jpg"}
                  alt="Shoes"
                  className="rounded-full w-28 h-28"
                />
              </figure>
              <div className="card-body items-center text-center">
                <div className="rating">
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                    
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                    checked
                  />
                </div>
                <p className="font-poppins opacity-60 font-medium text-sm py-7 text-balance"> "Landmark Industrial Group exceeded our expectations, securing a perfect industrial space for our expanding operations. Their expertise and support were invaluable, guiding us through every step of the process. Highly recommended !"</p>
                <p className="px-7 font-franklin opacity-90 font-semibold text-sm">Emily Chen, Manager at FrostyFoods Ltd.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ClintsTesti;
