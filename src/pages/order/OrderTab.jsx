import React from 'react';
import FootCard from './FootCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const OrderTab = ({items}) => {

    const pagination = {
        clickable: true,
        renderBullet: function (index, className) {
          return '<span class="' + className + '">' + (index + 1) + '</span>';
        },
      };

    return (
        <div>
           <Swiper
                pagination={pagination}
                modules={[Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className='grid md:grid-cols-3 gap-6 max-w-screen-xl mx-auto px-8'>
                        {
                            items.map(item => <FootCard key={item._id} item={item}></FootCard>) 
                        }
                   </div>
                </SwiperSlide>
            </Swiper>                                       
        </div>                  
    );
};

export default OrderTab;