"use client"; // 클라이언트 사이드에서만 렌더링하도록 설정

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination"; // 페이지네이션 스타일
import "swiper/css/autoplay"; // Autoplay 스타일
import { Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";

const slideData = [
  { name: "slide 01", image: "", alt: "" },
  { name: "slide 02", image: "", alt: "" },
];

export default function KeyVisual() {
  return (
    <div className="relative w-full h-[100vh] min-h-[460px] overflow-hidden">
      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        loop
        autoplay={{
          delay: 300000, // 3초마다 슬라이드 변경
          disableOnInteraction: false, // 사용자가 슬라이드를 조작해도 자동 재생 계속
        }}
        pagination={{ clickable: true, el: ".swiper-pagination" }}
        className="h-full"
      >
        {slideData.map((slide) => (
          <SwiperSlide key={slide.name}>
            <div className="max-w-screen-xl flex bg-gray-200 flex-col justify-center px-5 h-full mx-auto">
              {slide.name}
              <h2>Find Your Center</h2>
              <p className="mt-[170px]">
                마음의 중심을 찾는 공간, 흐르다야요가 <br />
                외부세상에 흔들리지 않는 나만의 고요한 중심을 발견하세요.
              </p>
            </div>
          </SwiperSlide>
        ))}
        <div className="swiper-pagination absolute bottom-0 left-0 right-0"></div>
      </Swiper>
    </div>
  );
}
