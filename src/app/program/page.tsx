"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation"; // 네비게이션 스타일을 추가로 가져옵니다.
import { useState } from "react";
import Image from "next/image";
import SubLayout from "../ui/subLayout";
import nextConfig from "../../../next.config.mjs";

const slideData = [
  {
    title: "테라피월",
    descripton:
      "매트 위에서 수련을 이어가다보면 나도 모르는 사이 자세에 패턴이 생겨나 불균형하게 몸을 사용하고 있는 경우도 있습니다. 테라피월은 벽과 바닥, 스트랩을 3차원적으로 사용하여 몸을 더 바르고 섬세하게 사용하여 그 불균형의 패턴을 깨고 몸의 정렬을 맞추어나가는 도구요가입니다.",
  },
  {
    title: "빈야사",
    descripton: `빈야사는 "흐르다(flow)"라는 뜻으로, 일련의 요가자세들을 호흡이라는 흐름 안에서 실에 구슬을 꿰듯 엮어서 수련하는 요가수업입니다. 근력과 유연성을 동시에 발달시키며, 이어가는 움직임 안에서 몰입을 경험하며 움직이는 명상이 되는 수련입니다.`,
  },
  {
    title: "하타",
    descripton:
      "정통요가자세를 하나하나 정성을 들여 단계별로 수련하며, 집중력과 인내심을 키우고 신체를 모든 방면으로 골고루 사용하는 요가수업입니다.",
  },
  {
    title: "오다카",
    descripton: `오다카는 "물"이라는 뜻으로 파도의 흐름에서 영감을 받은 5가지 웨이브와 2가지 타이드를 통해 물 흐르듯 자세들을 연결하여 수련하는 빈야사요가 입니다.`,
  },
  {
    title: "산전산후요가",
    descripton:
      "여성의 생애주기에서 가장 랜드마크가 되는 임신과 출산이라는 과정 안에서, 그 신체변화에 맞는 적절한 요가수련을 통해 건강을 도모하고 행복을 나눕니다.",
  },
  {
    title: "국제요가지도자과정 RYT200",
    descripton:
      "요가강사가 되기 위한 자격과정을 진행하고 있으며 국제요가자격증인 RYT200과 문화체육관광부에 등록된 민간자격증 요가지도자1급을 동시발급하는 교육과정입니다. 아사나, 해부학, 요가철학, 미세신체론, 교수법, 티칭실습 등이 포함된 200시간 과정입니다.",
  },
  {
    title: "힐링 명상",
    descripton:
      "싱잉볼과 핸드팬등 울림 타악기를 활용하여 릴렉스하며 명상을 하는 과정입니다. 채명악기의 울림을 느끼면서 자아를 들여다 보는 음악치료 기법 중 유도된 음악 심상 기법으로 진행됩니다.",
  },
];

export default function Page() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <SubLayout imageSrc="program_kv.jpg" title="프로그램 소개">
      <div className="mb-[40px] flex gap-[78px] border-b border-black pb-[40px] md:mb-[80px] md:pb-[80px]">
        <div className="flex w-full flex-col justify-between border-black md:border-t">
          <h3 className="text-[26px] md:mt-[50px] md:text-title">
            <p className="font-bold">
              <span className="font-serif">HRDAYA YOGA</span> 프로그램
            </p>
          </h3>

          <ul className="mt-[20px] md:mt-0">
            {slideData.map((data) => (
              <li
                key={data.title}
                className="li-point relative pl-[30px] text-[14px] leading-[27px] md:pl-[100px] md:text-[26px] md:leading-[48px]"
              >
                {data.title}
              </li>
            ))}
          </ul>
        </div>
        <div className="relative hidden h-[720px] w-full max-w-[540px] overflow-hidden md:block">
          <Image
            src={`${nextConfig.basePath}/program_mona.jpg`}
            fill
            alt="흐르다야 요가 - 모나"
            className="object-cover"
            quality={100}
          />
        </div>
      </div>

      {/* slide */}
      <div className="h-[calc(165px + (100vw - 40px) + 20px)] md:h-[670px]">
        <div className="relative">
          {slideData.map((data, index) => (
            <div key={data.title}>
              {activeIndex === index && (
                <>
                  <h4 className="mb-[20px] text-[20px] md:mb-[15px] md:text-[24px]">
                    {data.title}
                  </h4>
                  <p className="min-h-[135px] max-w-[985px] leading-[27px] md:min-h-[48px] md:leading-normal">
                    {data.descripton}
                  </p>
                </>
              )}
            </div>
          ))}
          {/* Custom Navigation Buttons */}
          <div className="absolute right-0 top-0">
            <button className="custom-prev mr-[12px] w-[25px] disabled:opacity-40 md:w-auto">
              <Image
                src={`${nextConfig.basePath}/arrow.svg`}
                alt="prev"
                width={40}
                height={40}
              />
            </button>
            <button className="custom-next w-[25px] rotate-180 transform disabled:opacity-40 md:w-auto">
              <Image
                src={`${nextConfig.basePath}/arrow.svg`}
                alt="prev"
                width={40}
                height={40}
              />
            </button>
          </div>
        </div>

        <div className="left-0 right-0 mx-auto mt-[20px] max-w-[1920px] md:absolute md:mt-[50px]">
          <Swiper
            spaceBetween={50}
            slidesPerView={"auto"}
            centeredSlides
            className="about-swiper"
            navigation={{
              nextEl: ".custom-next",
              prevEl: ".custom-prev",
            }}
            modules={[Navigation]}
            onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
          >
            {slideData.map((data, index) => (
              <SwiperSlide
                key={data.title}
                style={{
                  width: window.innerWidth <= 768 ? "auto" : "500px",
                }}
              >
                <div className="relative h-[calc(100vw-40px)] w-[calc(100vw-40px)] md:h-[500px] md:w-[500px]">
                  <Image
                    src={`${nextConfig.basePath}/program_0${index + 1}.jpg`}
                    alt={`흐르다야 요가의 ${data.title} 프로그램`}
                    fill
                    className="object-cover"
                    quality={100}
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </SubLayout>
  );
}
