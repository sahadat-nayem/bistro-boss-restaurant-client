import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';

import slide1 from '../assets/home/slide1.jpg';
import slide2 from '../assets/home/slide2.jpg';
import slide3 from '../assets/home/slide3.jpg';
import slide4 from '../assets/home/slide4.jpg';
import slide5 from '../assets/home/slide5.jpg';
import SectionTitle from '../shared/SectionTitle';

const Category = () => {
    return (
        <div>
            <SectionTitle
                subHeading={"--- From 11:00am to 10:00pm ---"}
                heading={"ORDER ONLINE"}
            ></SectionTitle>
            <Swiper
                slidesPerView={3}
                spaceBetween={30}
                pagination={{
                clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper max-w-screen-md mx-auto mb-24"
            >
                <SwiperSlide>
                    <img src={slide1} />
                    <h3 className='text-2xl uppercase text-center -mt-12 mb-5 text-white'>Salads</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide2}/>
                    <h3 className='text-2xl uppercase text-center -mt-12 mb-5 text-white'>Soups</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide3}/>
                    <h3 className='text-2xl uppercase text-center -mt-12 mb-5 text-white'>pizzas</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide4}/>
                    <h3 className='text-2xl uppercase text-center -mt-12 mb-5 text-white'>desserts</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide5}/>
                    <h3 className='text-2xl uppercase text-center -mt-12 mb-5 text-white'>Salads</h3>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Category;