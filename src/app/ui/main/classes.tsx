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
      <h2 className="font-serif">
        <strong>Our Classes</strong>
      </h2>

      <ul>
        {classesData.map((data, index) => (
          <li
            key={data.name}
            className="border-t border-black max-w-[calc(50%-40px)] px-[20px]"
          >
            <h3>
              <button
                className="relative w-full text-left pt-[16px] pb-[12px]"
                onClick={() => handleClick(index)}
              >
                <span>{data.name}</span>
                {selected === index && (
                  <span className="text-pointColor text-[70px] absolute top-[16px] right-0">
                    <Image src="/asterisk.svg" alt="" width={23} height={23} />
                  </span>
                )}
              </button>
            </h3>

            {selected === index && (
              <div className="absolute top-0 right-0 bg-slate-50 w-[calc(50%-40px)] pb-[66.67%-40px] min-h-[765px]">
                <Image
                  src={data.image !== "" ? data.image : "/next.svg"}
                  // width={574}
                  // height={765}
                  layout="fill"
                  objectFit="cover"
                  alt="이미지"
                />
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
