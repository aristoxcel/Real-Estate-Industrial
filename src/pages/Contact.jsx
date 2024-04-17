import HeadBar from "../components/HeadBar";
import { MdOutlineAttachEmail } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
import { FaPhoneVolume } from "react-icons/fa6";
import "leaflet/dist/leaflet.css";
import {  MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

function Contact() {

    const position = [23.7025, 90.4261]
  return (
    <div>
      <HeadBar>Contact Us</HeadBar>
      <MapContainer
          center={position}
          zoom={13}
          scrollWheelZoom={false}
          className="lg:w-4/5 mx-auto h-96 my-5 border-2 border-teal-600"
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={position} className="text-red-500 bg-red-700">
      <Popup className="text-base font-franklin font-semibold text-teal-700">
        Landmark Industrial Group
      </Popup>
    </Marker>
        </MapContainer>

      <div className="lg:w-4/5 lg:px-24 px-8 mx-auto lg:py-12 py-8">
        <hr className="border-dashed lg:my-8 my-6"></hr>
        <h1 data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="500" className="lg:text-4xl text-2xl font-extrabold py-4 lg:py-6 text-center text-[#2596BE] playfair">
          Contact with us
        </h1>
        <p className="text-pera lg:text-base text-sm font-medium text-center lg:w-1/2 md:w-2/3 mx-auto">
          Contact with us to explore exciting opportunities, share feedback, or
          inquire about our services.
        </p>
        <hr className="border-dashed lg:my-8 my-6 row-end-auto  " />

        <div className="grid lg:grid-cols-12 grid-cols-1 gap-4 ">
          <div className="col-span-5">
            <div className="grid grid-rows-3 lg:gap-4 gap-6 border border-[#13131837] rounded-2xl lg:p-8 p-4">
              <div className="bg-[#BCED6D1A] rounded-2xl lg:p-8 lg:pb-9 p-5">
                <FaPhoneVolume className="text-3xl text-[#23BE0A]" />
                <p className="text-pera">Phone Number : </p>
                <h4 className="text-heading text-lg md:text-base lg:text-lg lg:font-extrabold md:font-semibold font-extrabold">
                  (+880) 01911-309454
                </h4>
              </div>

              <div className="bg-[#fddb5f19] rounded-2xl lg:p-8 lg:pb-9 p-5">
                <MdOutlineAttachEmail className="text-info text-3xl" />
                <p className="text-pera">Email : </p>
                <h4 className="text-heading text-lg md:text-base lg:text-lg lg:font-extrabold md:font-semibold font-extrabold">
                  landmark@support.com
                </h4>
              </div>

              <div className="bg-[#629cf319] rounded-2xl lg:p-8 lg:pb-9 p-5">
                <IoLocationOutline className="text-3xl text-[#23BE0A]" />
                <p className="text-pera">Location : </p>
                <h4 className="text-heading text-lg md:text-base lg:text-lg lg:font-extrabold md:font-semibold font-extrabold">
                  Gandaria, Dhaka, Bangladesh
                </h4>
              </div>
            </div>
          </div>

          <div className="col-span-7 ">
            <div className="grid lg:grid-cols-2 grid-cols-1 justify-center items-center gap-3 pb-2">
              <label className="form-control w-full">
                <div className="label text-xl font-bold">Your Name</div>
                <input
                  type="text"
                  placeholder="Enter your full name"
                  className="input input-bordered w-full  bg-[#13131805]"
                />
              </label>

              <label className="form-control w-full">
                <div className="label text-xl font-bold">Your Email</div>
                <input
                  type="text"
                  placeholder="Enter your email"
                  className="input input-bordered w-full  bg-[#13131805]"
                />
              </label>
            </div>

            <div className="grid lg:grid-cols-2 grid-cols-1 justify-center items-center gap-3 pb-4">
              <label className="form-control w-full ">
                <div className="label text-xl font-bold">Subject</div>
                <input
                  type="text"
                  placeholder="Enter your subject"
                  className="input input-bordered w-full bg-[#13131805]"
                />
              </label>

              <label className="form-control w-full ">
                <div className="label text-xl font-bold">Phone Number</div>
                <input
                  type="text"
                  placeholder="Enter your phone numberEnter your email"
                  className="input input-bordered w-full  bg-[#13131805]"
                />
              </label>
            </div>

            <label className="form-control w-full lg:h-[62%] pb-4">
              <div className="label text-xl font-bold">Message</div>
              <textarea
                className="textarea input-bordered w-full h-full bg-[#13131805]"
                placeholder="Write your message"
                rows="4"
              ></textarea>
            </label>

            <button className="btn bg-[#2596BE] w-full text-white font-bold text-xl">
              Send us Message
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
