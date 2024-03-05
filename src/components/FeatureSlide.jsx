import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css"
import { houseData } from '../data/houseData';
import { TbMapPinPin } from 'react-icons/tb'

export default function FeatureSlide() {
    return (
        <Swiper slidesPerView={3} modules={[Autoplay]} breakpoints={{
            320: { slidesPerView: 2, spaceBetween: 15 },
            650: { slidesPerView: 3, spaceBetween: 15 },
            960: { slidesPerView: 4, spaceBetween: 15 },
        }}
            autoplay={{ delay: 4000 }}
            fadeEffect={{ crossFade: true }}
            loop={true}
            direction='horizontal'
            className='over-flow-x-hidden w-full py-5'
        >

            {houseData.map(house => (
                <SwiperSlide key={house.id}>
                    <div className="rounded-md overflow-hidden min-h-44 md:min-h-56 hover:-translate-y-1 hover:shad bg-white ">
                        <div className="h-32 w-full overflow-hidden relative">
                            <img src={house.image} alt={house.title} className="w-full h-full object-cover object-center" />
                        </div>
                        <div className="flex flex-col justify-between px-4 pb-4 pt-2">
                            <h5 className="text-slate-700 text-base sm:text-lg text-justify leading-tight font-semibold">{house.title}</h5>
                            <p className="flex item-center font-medium text-xs sm:text-sm opacity-70 text-slate-600"><TbMapPinPin className="mr-1 text-inherit " /> {house.address}</p>
                        </div>
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    )
}
