"use client";

import Image from "next/image";
import SubLayout from "../ui/subLayout";
import { SetStateAction, useState } from "react";
import nextConfig from "../../../next.config.mjs";

const tabData = [
  {
    tabName: "지도경력",
    tabList: [
      "E-RYT 500, YACEP, Registerd Prenatal Yoga Teacher, 공인 오다카요가 티쳐",
      "흐르다야요가 마포공덕센터 운영 2023~",
      "흐르다야요가 고양삼송센터 운영 2021~",
      "전) 자이요가명상 청담본원/한남점 강사",
      "유튜브채널 [모나요가] 운영",
      "전) 온라인 강의플랫폼 “클래스유” 파트너강사 (임산부요가, 산후요가)",
      "전) 여성병원, 현대백화점문화센터 산전산후요가 강사",
      "흐르다야요가 RYT200 국제요가지도자과정 대표강사",
      "여성생애주기요가 지도자과정 FLY TTC 대표강사",
      "베파요가스쿨 상암점 RYT200 요가지도자과정 지도강사 (1기~7기)",
      "베파요가스쿨 임산부요가TTC 다수 진행",
      "로이요가 수지죽전점/신갈본원 요가지도자과정 지도강사",
      "로이요가 임산부요가 워크샵 다수 진행",
      "전) 삼청동 국제갤러리 Wellness K 산전산후요가 소그룹 지도강사",
    ],
  },
  {
    tabName: "수료경력",
    tabList: [
      "자이요가+명상 자이빈야사 RYT200",
      "자이요가+명상 산전산후실버요가 JASP",
      "자이요가+명상 리프레쉬릴랙스요가, 모던하타요가",
      "자이요가+명상 고급명상지도자과정 JAM with 민진희",
      "Bliss Baby Yoga Fertility Yoga Lv.1, Lv.2",
      "Bliss Baby Yoga Pelvic Anatomy",
      "Bliss Baby Yoga Prenatal & Postnatal Yoga TTC",
      "아비야사요가기능해부학with 비하",
      "한국아헹가요가협회 지도자과정 Lv.1 & Lv.2 with 현천스님",
      "사트얌요가 Yin Yoga Lv.1 with Chris Su",
      "청담 사트바요가 Yin Yoga Method TTC",
      "Awakened Spirit Yoga, Sacred Birth Prenatal TTC",
      "DONA, Doula training",
      "East + West Yoga, Bali, RYT 300",
      "Odaka Yoga TTC RYT200",
      "Odaka Yoga, Trauma Informed Yoga",
    ],
  },
];

export default function Page() {
  const [selected, setSelected] = useState(0);

  const handleClick = (index: SetStateAction<number>) => {
    setSelected(index);
  };

  return (
    <SubLayout imageSrc="about_kv.jpg" title="대표원장 소개">
      <div className="flex gap-[78px]">
        <div className="relative hidden h-[720px] w-full max-w-[540px] overflow-hidden md:block">
          <Image
            src={`${nextConfig.basePath}/about_mona.jpg`}
            fill
            alt="흐르다야 요가 - 모나"
            quality={100}
            className="object-cover"
          />
        </div>
        <div className="w-full border-black md:border-t">
          <h3 className="text-[26px] font-bold md:mt-[50px] md:text-title">
            <p>
              <span className="font-serif">HRDAYA YOGA</span> 대표원장
            </p>
            <p className="text-[16px] md:text-[26px]">Mona (모나)</p>
          </h3>

          <div className="mt-[20px] md:hidden">
            <Image
              src={`${nextConfig.basePath}/about_mona.jpg`}
              width={500}
              height={466}
              alt="흐르다야 요가 - 모나"
              quality={100}
              className="mx-auto h-full object-cover"
            />
          </div>

          <div className="relative mt-[40px] md:mt-[96px]">
            <div className="flex">
              {tabData.map((data, index) => (
                <button
                  key={data.tabName}
                  onClick={() => handleClick(index)}
                  className={`mr-[15px] rounded-[20px] border border-black p-[8px_16px] md:mr-[24px] md:p-[8px_25px] ${
                    selected === index && "bg-white"
                  }`}
                >
                  {data.tabName}
                </button>
              ))}
            </div>

            {tabData.map((data, index) => (
              <div key={data.tabName}>
                {selected === index && (
                  <ul className="mt-[20px] list-disc pl-[20px] md:mt-[40px]">
                    {data.tabList.map((listData) => (
                      <li
                        key={listData}
                        className={`${
                          selected === 0
                            ? "leading-[28px]"
                            : "leading-[28px] md:leading-[25px]"
                        }`}
                      >
                        {listData}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </SubLayout>
  );
}
