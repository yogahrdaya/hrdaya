import Image from "next/image";
import nextConfig from "../../../next.config.mjs";

const linkData = [
  {
    name: "카카오채널 삼송요가흐르다야",
    link: "http://pf.kakao.com/_jfGxes/chat",
    image: "/kakao.png",
  },
  {
    name: "흐르다야 요가 네이버플레이스",
    link: "https://map.naver.com/p/entry/place/1951028081",
    image: "/naver.png",
  },
  {
    name: "흐르다야 요가 인스타그램",
    link: "https://www.instagram.com/yoga_hrdaya",
    image: "/instagram.png",
  },
];

export default function LinkButtons({ className = "" }) {
  return (
    <ul className={`flex gap-[20px] ${className}`}>
      {linkData.map((data) => (
        <li key={data.name}>
          <a href={data.link} target="_blank" rel="noopener noreferrer">
            <Image
              src={`${nextConfig.basePath}${data.image}`}
              alt={data.name}
              width={60}
              height={60}
              quality={100}
            />
          </a>
        </li>
      ))}
    </ul>
  );
}
