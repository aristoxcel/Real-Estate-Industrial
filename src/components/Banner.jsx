


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
        <SwiperSlide><div ><img className='w-full h-[600px] object-cover' src={'industrial.jpg'} alt="" /></div></SwiperSlide>
        <SwiperSlide><div><img className='w-full h-[600px] object-cover' src={'Factories.jpg'} alt="" /></div></SwiperSlide>
        <SwiperSlide><div><img className='w-full h-[600px] object-cover' src={'factories2.jpg'} alt="" /></div></SwiperSlide>
        <SwiperSlide><div><img className='w-full h-[600px] object-cover' src={'warehouse2.jpg'} alt="" /></div></SwiperSlide>
        <SwiperSlide><div><img className='w-full h-[600px] object-cover' src={'warhouse.jpg'} alt="" /></div></SwiperSlide>
      </Swiper>
    </>
  )
}

export default Banner
