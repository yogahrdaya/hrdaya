"use client";

import Link from "next/link";
import Image from "next/image"; // Ensure this import is correct

const links = [
  { name: "대표원장 소개", href: "/about" },
  { name: "프로그램 소개", href: "/program" },
  { name: "스튜디오 소개", href: "/studio" },
];

export default function Header() {
  return (
    <header className="absolute top-[34px] w-full max-w-[1920px] z-10">
      <div className="max-w-screen-xl mx-auto flex justify-between px-5">
        <Link href="/">
          <h1>
            <Image
              src="/logo.png"
              alt="logo"
              width={200}
              height={50}
              // layout="intrinsic"
              className="w-auto h-auto"
            />
          </h1>
        </Link>
        <nav>
          <ul className="flex">
            {links.map((data) => (
              <li key={data.name}>
                <Link key={data.name} href={data.href} className="pl-[40px]">
                  {data.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
