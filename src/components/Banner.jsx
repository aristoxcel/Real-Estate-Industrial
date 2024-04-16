


import { Swiper, SwiperSlide } from 'swiper/react';


import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';



// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const Banner = () => {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          type: 'progressbar',
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide><div className='relative'><img className='rounded-xl w-full h-[700px] object-fill' src={'https://i.ibb.co/1bKCZ9W/manufactur.jpg'} alt="" />
        <div className='absolute top-[63%] left-10'>
          <div>
            <h1 className='font-franklin font-bold text-3xl md:text-4xl lg:text-5xl text-white'>Find Your Industrial Potential</h1>
            <h1 className='font-franklin font-bold text-3xl md:text-4xl lg:text-5xl text-white pb-4'>in every Property </h1>
            <div className='md:flex-row gap-5 md:items-center flex flex-col-reverse'>
              <button  className=' px-4 btn bg-transparent text-white rounded-3xl ring-purple-200 font-poppins font-medium font-2xl  hover:bg-white hover:text-gray-500'><a href='/#card'>Get Started</a> </button>
            <p className='opacity-70 text-xl font-medium font-poppins text-white md:w-1/2'>Unlock premium industrial real estate solutions for unparalleled efficiency.</p>
              </div>
          </div>
        </div>
        </div></SwiperSlide>
        <SwiperSlide><div className='relative'><img className='rounded-xl w-full h-[700px] object-fill' src={'https://i.ibb.co/yX10rx6/warehouse.png'} alt="" />
        <div className='absolute top-[63%] left-10'>
          <div>
            <h1 className='font-franklin font-bold text-3xl md:text-4xl lg:text-5xl text-white'>Find Your Industrial Potential</h1>
            <h1 className='font-franklin font-bold text-3xl md:text-4xl lg:text-5xl text-white pb-4'>in every Property </h1>
            <div className='md:flex-row gap-5 md:items-center flex flex-col-reverse'>
              <button  className=' px-4 btn bg-transparent text-white rounded-3xl ring-purple-200 font-poppins font-medium font-2xl  hover:bg-white hover:text-gray-500'><a href='/#card'>Get Started</a> </button>
            <p className='opacity-70 text-xl font-medium font-poppins text-white md:w-1/2'>Unlock premium industrial real estate solutions for unparalleled efficiency.</p>
              </div>
          </div>
        </div>
        </div></SwiperSlide>
        <SwiperSlide><div className='relative'><img className='rounded-xl w-full h-[700px] object-fill' src={'https://i.ibb.co/kqVqcMh/navvis-factory-planning2-header.webp'} alt="" />
        <div className='absolute top-[63%] left-10'>
          <div>
            <h1 className='font-franklin font-bold text-3xl md:text-4xl lg:text-5xl text-white'>Find Your Industrial Potential</h1>
            <h1 className='font-franklin font-bold text-3xl md:text-4xl lg:text-5xl text-white pb-4'>in every Property </h1>
            <div className='md:flex-row gap-5 md:items-center flex flex-col-reverse'>
              <button  className=' px-4 btn bg-transparent text-white rounded-3xl ring-purple-200 font-poppins font-medium font-2xl  hover:bg-white hover:text-gray-500'><a href='/#card'>Get Started</a> </button>
            <p className='opacity-70 text-xl font-medium font-poppins text-white md:w-1/2'>Unlock premium industrial real estate solutions for unparalleled efficiency.</p>
              </div>
          </div>
        </div>
        </div></SwiperSlide>
        <SwiperSlide><div className='relative'><img className=' rounded-xl w-full h-[700px] object-fill' src={'https://i.ibb.co/qM94XQg/plants.png'} alt="" />
        <div className='absolute top-[63%] left-10'>
          <div>
            <h1 className='font-franklin font-bold text-3xl md:text-4xl lg:text-5xl text-white'>Find Your Industrial Potential</h1>
            <h1 className='font-franklin font-bold text-3xl md:text-4xl lg:text-5xl text-white pb-4'>in every Property </h1>
            <div className='md:flex-row gap-5 md:items-center flex flex-col-reverse'>
              <button  className=' px-4 btn bg-transparent text-white rounded-3xl ring-purple-200 font-poppins font-medium font-2xl  hover:bg-white hover:text-gray-500'><a href='/#card'>Get Started</a> </button>
            <p className='opacity-70 text-xl font-medium font-poppins text-white md:w-1/2'>Unlock premium industrial real estate solutions for unparalleled efficiency.</p>
              </div>
          </div>
        </div>
        </div></SwiperSlide>
        <SwiperSlide><div className='relative'><img className='rounded-xl w-full h-[700px] object-fill' src={'warhouse.jpg'} alt="" />
        <div className='absolute top-[63%] left-10'>
          <div>
            <h1 className='font-franklin font-bold text-3xl md:text-4xl lg:text-5xl text-white'>Find Your Industrial Potential</h1>
            <h1 className='font-franklin font-bold text-3xl md:text-4xl lg:text-5xl text-white pb-4'>in every Property </h1>
            <div className='md:flex-row gap-5 md:items-center flex flex-col-reverse'>
              <button  className=' px-4 btn bg-transparent text-white rounded-3xl ring-purple-200 font-poppins font-medium font-2xl  hover:bg-white hover:text-gray-500'><a href='/#card'>Get Started</a> </button>
            <p className='opacity-70 text-xl font-medium font-poppins text-white md:w-1/2'>Unlock premium industrial real estate solutions for unparalleled efficiency.</p>
              </div>
          </div>
        </div>
        </div></SwiperSlide>
      </Swiper>
    </>
  )
}

export default Banner
