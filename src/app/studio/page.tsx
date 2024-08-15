import Image from "next/image";
import SubLayout from "../ui/subLayout";
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

function LayoutTop({ images }: { images: number[] }) {
  return (
    <div className="flex gap-[20px] mt-[20px]">
      <div className="relative w-full max-w-[400px] h-[600px] overflow-hidden">
        <Image
          src={`${nextConfig.basePath}/studio_0${images[0]}.jpg`}
          fill
          alt={`흐르다야 스튜디오 ${images[0]}번째 이미지`}
          quality={100}
          className="object-cover"
        />
      </div>
      <div className="relative w-full max-w-[820px] h-[546px] overflow-hidden">
        <Image
          src={`${nextConfig.basePath}/studio_0${images[1]}.jpg`}
          fill
          alt={`흐르다야 스튜디오 ${images[1]}번째 이미지`}
          quality={100}
          className="object-cover"
        />
      </div>
    </div>
  );
}

function LayoutBottom({ images }: { images: number[] }) {
  return (
    <div className="flex gap-[20px] items-end mt-[-34px]">
      <div className="relative w-full max-w-[820px] h-[546px] overflow-hidden">
        <Image
          src={`${nextConfig.basePath}/studio_0${images[0]}.jpg`}
          fill
          alt={`흐르다야 스튜디오 ${images[0]} 이미지`}
          quality={100}
          className="object-cover"
        />
      </div>
      <div className="relative w-full max-w-[400px] h-[600px] overflow-hidden">
        <Image
          src={`${nextConfig.basePath}/studio_0${images[1]}.jpg`}
          fill
          alt={`흐르다야 스튜디오 ${images[1]} 이미지`}
          quality={100}
          className="object-cover"
        />
      </div>
    </div>
  );
}

export default function Page() {
  return (
    <SubLayout imageSrc="/studio_kv.jpg" title="스튜디오 소개">
      <div className="w-full border-t border-black flex justify-between items-center pt-[43px]">
        <h3 className="text-title">
          <p className="font-bold">
            <span className="font-serif">HRDAYA YOGA</span> 스튜디오
          </p>
        </h3>
        <ul className="flex gap-[20px]">
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
      </div>

      <div className="mt-[93px]">
        <LayoutTop images={[1, 2]} />
        <LayoutBottom images={[3, 4]} />
        <LayoutTop images={[5, 6]} />
        <LayoutBottom images={[7, 8]} />
      </div>
    </SubLayout>
  );
}
