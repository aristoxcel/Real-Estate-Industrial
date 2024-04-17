function Consult() {
  return (
    <div className="relative py-1 h-[500px]">
      <div className="bg-[url('Factories.jpg')] my-10">
       <div className="bg-black opacity-40">
       <div className="lg:w-[70%] md:w-4/5 mx-auto grid grid-cols-2 gap-5 px-3 md:px-0 ">
          <div className="py-16" data-aos="fade-left"
     data-aos-easing="ease-in-sine"
     data-aos-delay="100">
            <h1 className="font-franklin text-2xl md:text-4xl lg:text-5xl font-bold uppercase text-white">
              request a free
            </h1>
            <h1 className="font-franklin text-2xl md:text-4xl lg:text-5xl font-bold uppercase text-white">
              Consultation
            </h1>
            <p className="py-4 font-poppins md:text-lg text-sm font-semibold text-white opacity-90">
              Our experts and developers would love to contribute their
              experties and insights and help you today. Our expoers and
              developers.
            </p>
            <button className="px-3 font-poppins  bg-[#2596BE] hover:bg-gradient-to-r hover:from-[#2596be] hover:to-[#62b4d2] hover:ring-2 hover:ring-offset-2 hover:ring-[#62b4d2] transition-all ease-out duration-300 font-semibold text-lg lg:text-xl text-white rounded">
              Contact Us
            </button>
          </div>
          <div></div>
        </div>
       </div>
      </div>

      <div className=" absolute top-0">
        <div>
          <div className="lg:w-[70%] md:w-4/5 mx-auto grid md:grid-cols-2 grid-cols-1 gap-5  px-3 md:px-0">
            <div></div>
            <div>
              <div data-aos="flip-left"
     data-aos-easing="ease-in-sine"
     data-aos-duration="400" className="md:ml-4 w-full  shadow-2xl bg-base-100 px-3 md:px-4 pt-10 rounded-lg">
                <h1 className="text-lg md:text-2xl font-semibold font-franklin opacity-80">Get in touch with us</h1>
                <p className=" mt-3 font-poppins text-sm font-medium opacity-70 text-wrap pb-2">Reach out to us today to get personalized assistance and expert guidance for all your industrial real estate needs.</p>
                <form className=" py-3 space-y-2">
                <input
                      type="text"
                      placeholder="Your Name"
                      className="input input-bordered w-full"
                      required
                    />
                    <input
                      type="email"
                      placeholder="Your Email"
                      className="input input-bordered w-full"
                      required
                    />
                   <input
                      type="number"
                      placeholder="Phone Number"
                      className="input input-bordered w-full"
                      required
                    />
                  <textarea
                      type="textarea"
                      placeholder="Message"
                      rows={3}
                      className="border rounded-lg px-6 w-full"
                      required
                    />
                  <div className="w-full">
                  <p className="w-full font-poppins  bg-[#2596BE] hover:bg-gradient-to-r hover:from-[#2596be] hover:to-[#62b4d2] hover:ring-2 hover:ring-offset-2 hover:ring-[#62b4d2] transition-all ease-out duration-300 font-semibold text-sm lg:text-xl text-white rounded py-2 my-2">Send us Message</p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Consult;
