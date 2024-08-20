"use client";
import { SetStateAction, useState } from "react";
import Image from "next/image";
import nextConfig from "../../../../next.config.mjs";

const classesData = [
  { name: "테라피월" },
  { name: "반야사" },
  { name: "하타" },
  { name: "오다카" },
  { name: "산전산후요가" },
  { name: "국제요가지도자과정 RYT200" },
  { name: "힐링 명상" },
];

export default function Classes() {
  const [selected, setSelected] = useState(0);

  const handleClick = (index: SetStateAction<number>) => {
    setSelected(index);
  };

  return (
    <div className="relative mx-auto my-[60px] flex min-h-[480px] max-w-screen-xl flex-col overflow-hidden px-5 md:my-[100px] md:min-h-[765px] md:justify-between">
      <h2 className="mb-[20px] font-serif text-[22px] md:mx-0 md:text-title">
        <strong>Our Classes</strong>
      </h2>

      <ul className="flex-wrax flex flex-wrap gap-x-[24px] pb-[calc(100vw-29px)] md:block md:pb-0">
        {classesData.map((data, index) => (
          <li
            key={data.name}
            className="md:max-w-[calc(50%-40px)] md:border-t md:border-black md:px-[20px] md:text-[20px]"
          >
            <h3>
              <button
                className={`classes-list relative w-full pb-[12px] text-left md:pb-[14px] md:pt-[14px] ${selected === index ? "font-bold text-pointColor" : "font-normal"} md:font-normal md:text-black`}
                onClick={() => handleClick(index)}
              >
                <span>{data.name}</span>
                {selected === index && (
                  <span className="absolute right-0 top-[18px] hidden text-[70px] text-pointColor md:block">
                    <Image
                      src={`${nextConfig.basePath}/asterisk.svg`}
                      alt=""
                      width={22}
                      height={22}
                    />
                  </span>
                )}
              </button>
            </h3>

            <div
              className={`absolute left-[50%] top-[130px] h-[calc(100vw-40px)] min-h-[350px] w-[calc(100vw-40px)] translate-x-[-50%] transition-opacity duration-[500ms] md:hidden ${
                selected === index ? "opacity-100" : "opacity-0"
              }`}
            >
              <Image
                src={`${nextConfig.basePath}/program_0${index + 1}.jpg`}
                fill
                alt={`흐르다야 요가 ${data.name} 수업`}
                quality={100}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
                className="object-cover"
              />
            </div>
            <div
              className={`absolute hidden h-[765px] max-w-[calc(50%-20px)] transition-opacity duration-[500ms] md:right-0 md:top-0 md:block ${
                selected === index ? "opacity-100" : "opacity-0"
              }`}
            >
              <Image
                src={`${nextConfig.basePath}/main_classes_0${index + 1}.jpg`}
                alt={`흐르다야 요가 ${data.name} 수업`}
                width={574}
                height={765}
                quality={100}
                className="h-full w-auto object-cover"
              />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
