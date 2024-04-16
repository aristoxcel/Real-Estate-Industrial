import HeadBar from "../components/HeadBar"


function About() {
  return (
    <div>
      <HeadBar >About Us</HeadBar>
      <div>
      <div className="px-3 bg-base-200 lg:w-4/5 mx-auto rounded-2xl py-24 mb-3">
            <div className=" flex-col  gap-3">
                <img src="Factories.jpg" className="rounded-lg shadow-2xl mb-4 w-full" />
                <div className="px-2 space-y-3 font-poppins opacity-70 font-medium lg:basis-1 grow">
                <h1 className="text-5xl font-bold playfair">We are</h1>
                <p className="py-2"><span className="font-bold text-2xl font-franklin text-[#2596BE]">Landmark Industrial Group</span> is a leading provider of industrial real estate solutions, dedicated to helping businesses find the perfect space to thrive. With years of experience and a commitment to excellence, we specialize in connecting clients with top-tier industrial properties tailored to their unique needs</p>
                <p>At Landmark Industrial Group, we understand the importance of finding the right space for your business operations. Whether you are in need of a warehouse, factory, cold storage facility, or power plant, our team of experts is here to guide you every step of the way.</p>
                <p>Our approach is centered around delivering exceptional customer service and building long-lasting relationships with our clients. We take the time to understand your specific requirements and preferences, ensuring that we find the ideal property that aligns with your goals.</p>
                <p>With a diverse portfolio of properties and a network of trusted partners, we have the resources and expertise to cater to businesses of all sizes and industries. From initial consultation to lease negotiation and beyond, we are here to support you throughout your industrial real estate journey.</p>
                <p className="pb-6">Choose Landmark Industrial Group as your trusted partner for all your industrial real estate needs, and let us help you unlock the potential of your business.</p>
                <button className="btn bg-[#2596BE]  text-white font-semibold text-lg rounded-lg ">Contact Us</button>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default About