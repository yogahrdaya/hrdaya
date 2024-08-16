"use client";
import Image from "next/image";
import nextConfig from "../../../../next.config.mjs";

export default function Contact() {
  return (
    <div className="relative flex h-[484px] items-center justify-center text-center md:h-[630px]">
      {/* 배경 이미지 */}
      <div className="absolute inset-0 z-0">
        <Image
          src={`${nextConfig.basePath}/main_contact.jpg`}
          alt="Contact Background"
          layout="fill"
          objectFit="cover"
          className="hidden object-center md:block"
          quality={100}
        />
        <Image
          src={`${nextConfig.basePath}/mo_main_contact.jpg`}
          alt="Contact Background"
          layout="fill"
          objectFit="cover"
          className="object-center md:hidden"
          quality={100}
        />
      </div>

      {/* 콘텐츠 */}
      <div className="relative z-10 max-w-screen-xl">
        <h2 className="font-serif text-[22px] font-[22px] md:text-title">
          Contact <strong>Hrdaya Yoga</strong>
        </h2>
        <ul className="mt-[40px] font-[14px] md:font-[16px]">
          <li>
            070 4115 1080
            <br />-
          </li>
          <li>
            <a
              href="http://pf.kakao.com/_jfGxes/chat"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              카카오채널 &apos;삼송요가흐르다야&apos; 문의
            </a>
            <br />-
          </li>
          <li>
            <a
              href="https://www.instagram.com/yoga_hrdaya"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              Instagram
            </a>
            <br />-
          </li>
          <li>
            <a
              href="https://map.naver.com/p/entry/place/1951028081"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              네이버플레이스
            </a>
            <br />-
          </li>
          <li>경기도 고양시 덕양구 동송로70 218호</li>
        </ul>
      </div>
    </div>
  );
}
