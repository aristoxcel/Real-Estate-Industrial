


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
        <SwiperSlide><div ><img className='w-full h-[600px] object-fill' src={'https://i.ibb.co/1bKCZ9W/manufactur.jpg'} alt="" /></div></SwiperSlide>
        <SwiperSlide><div><img className='w-full h-[600px] object-fill' src={'https://i.ibb.co/yX10rx6/warehouse.png'} alt="" /></div></SwiperSlide>
        <SwiperSlide><div><img className='w-full h-[600px] object-fill' src={'https://i.ibb.co/kqVqcMh/navvis-factory-planning2-header.webp'} alt="" /></div></SwiperSlide>
        <SwiperSlide><div><img className='w-full h-[600px] object-fill' src={'https://i.ibb.co/qM94XQg/plants.png'} alt="" /></div></SwiperSlide>
        <SwiperSlide><div><img className='w-full h-[600px] object-fill' src={'warhouse.jpg'} alt="" /></div></SwiperSlide>
      </Swiper>
    </>
  )
}

export default Banner
