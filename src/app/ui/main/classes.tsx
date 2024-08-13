"use client";
import { SetStateAction, useState } from "react";
import Image from "next/image";

const classesData = [
  { name: "테라피월", image: "/vercel.svg" },
  { name: "반야사", image: "" },
  { name: "하타", image: "" },
  { name: "오다카", image: "" },
  { name: "산전산후요가", image: "" },
  { name: "국제요가지도자과정 RYT200", image: "" },
  { name: "힐링 명상", image: "" },
];

export default function Classes() {
  const [selected, setSelected] = useState(0);

  const handleClick = (index: SetStateAction<number>) => {
    setSelected(index);
  };

  return (
    <div className="max-w-screen-xl mx-auto px-5 my-[100px] relative flex flex-col justify-between min-h-[765px]">
      <h2 className="font-serif text-title">
        <strong>Our Classes</strong>
      </h2>

      <ul>
        {classesData.map((data, index) => (
          <li
            key={data.name}
            className="border-t border-black max-w-[calc(50%-40px)] px-[20px] text-[20px]"
          >
            <h3>
              <button
                className="relative w-full text-left pt-[16px] pb-[12px]"
                onClick={() => handleClick(index)}
              >
                <span>{data.name}</span>
                {selected === index && (
                  <span className="text-pointColor text-[70px] absolute top-[18px] right-0">
                    <Image src="/asterisk.svg" alt="" width={22} height={22} />
                  </span>
                )}
              </button>
            </h3>

            <div
              className={`absolute top-0 right-0 w-[calc(50%-40px)] pb-[66.67%-40px] min-h-[765px] transition-opacity duration-[500ms] ${
                selected === index ? "opacity-100" : "opacity-0"
              }`}
            >
              <Image
                src={`/main_classes_0${index + 1}.jpg`}
                fill
                alt={`흐르다야 요가 ${data.name} 수업`}
                quality={100}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
                className="object-cover"
              />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
