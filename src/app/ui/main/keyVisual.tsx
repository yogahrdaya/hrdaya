"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination"; // 페이지네이션 스타일
import "swiper/css/autoplay"; // Autoplay 스타일
import "swiper/css/effect-fade"; // EffectFade 스타일
import { Pagination, Autoplay, EffectFade } from "swiper/modules";
import Image from "next/image";
import nextConfig from "../../../../next.config.mjs";

const slideData = [{ name: "slide 01" }, { name: "slide 02" }];

export default function KeyVisual() {
  return (
    <div className="relative h-[530px] w-full overflow-hidden md:h-[100vh] md:max-h-[900px] md:min-h-[460px]">
      <Swiper
        modules={[Pagination, Autoplay, EffectFade]}
        effect="fade"
        spaceBetween={50}
        slidesPerView={1}
        loop
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true, el: ".swiper-pagination" }}
        className="kv-swiper h-full"
      >
        {slideData.map((data, index) => (
          <SwiperSlide key={data.name}>
            <div className="absolute left-0 right-0 top-0 z-10 mx-auto flex h-full max-w-screen-xl flex-col px-5 py-[55px] text-[#6E4930] md:justify-center">
              <h2 className="font-serif text-[#6E4930]">
                <p className="text-[22px] md:text-[45px] md:text-pointColor">
                  HRDAYA YOGA
                </p>
                <p className="text-[35px] md:text-visualTitle">
                  Find Your Center
                </p>
              </h2>
              <p className="mt-[50px] hidden text-[20px] text-pointColor md:block">
                마음의 중심을 찾는 공간, 흐르다야요가 <br />
                외부세상에 흔들리지 않는 나만의 고요한 중심을 발견하세요.
              </p>
            </div>
            <div className="relative mx-auto h-[530px] w-full overflow-hidden md:h-[900px] md:max-w-[1920px]">
              <Image
                src={`${nextConfig.basePath}/kv_0${index + 1}.jpg`}
                alt={`흐르다야 요가 키비주얼 ${index + 1}`}
                fill
                className="absolute inset-0 object-cover md:block"
                quality={100}
              />
              <Image
                src={`${nextConfig.basePath}/mo_kv_0${index + 1}.jpg`}
                alt={`흐르다야 요가 키비주얼 ${index + 1}`}
                fill
                className="absolute inset-0 object-cover md:hidden"
                quality={100}
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
