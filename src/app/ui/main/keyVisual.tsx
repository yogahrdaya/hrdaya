"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination"; // 페이지네이션 스타일
import "swiper/css/autoplay"; // Autoplay 스타일
import "swiper/css/effect-fade"; // EffectFade 스타일
import { Pagination, Autoplay, EffectFade } from "swiper/modules";
import Image from "next/image";

const slideData = [{ name: "slide 01" }, { name: "slide 02" }];

export default function KeyVisual() {
  return (
    <div className="relative w-full h-[100vh] min-h-[460px] max-h-[900px] overflow-hidden">
      <Swiper
        modules={[Pagination, Autoplay, EffectFade]} // EffectFade 모듈 추가
        effect="fade" // 페이드 효과 설정
        spaceBetween={50}
        slidesPerView={1}
        loop
        autoplay={{
          delay: 3000, // 3초마다 슬라이드 변경
          disableOnInteraction: false, // 사용자가 슬라이드를 조작해도 자동 재생 계속
        }}
        pagination={{ clickable: true, el: ".swiper-pagination" }}
        className="kv-swiper h-full"
      >
        {slideData.map((data, index) => (
          <SwiperSlide key={data.name}>
            <div className="max-w-screen-xl flex flex-col justify-center px-5 py-12 h-full mx-auto absolute top-0 left-0 right-0 z-10">
              <h2 className="font-serif text-visualTitle text-pointColor">
                Find Your Center
              </h2>
              <p className="mt-[90px] text-[20px]">
                마음의 중심을 찾는 공간, 흐르다야요가 <br />
                외부세상에 흔들리지 않는 나만의 고요한 중심을 발견하세요.
              </p>
            </div>
            <div className="relative w-full h-[900px] max-w-[1920px] overflow-hidden mx-auto">
              <Image
                src={`/kv_0${index + 1}.jpg`}
                alt={`흐르다야 요가 키비주얼 ${index + 1}`}
                fill
                className="absolute inset-0 object-cover"
              />
            </div>
          </SwiperSlide>
        ))}
        <div
          className="swiper-pagination absolute left-0 right-0"
          style={{ bottom: "30px" }}
        ></div>
      </Swiper>
    </div>
  );
}
