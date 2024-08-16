"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import nextConfig from "../../../next.config.mjs";
import LinkButtons from "./linkButtons";

const links = [
  { name: "대표원장 소개", href: "/about" },
  { name: "프로그램 소개", href: "/program" },
  { name: "스튜디오 소개", href: "/studio" },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setTimeout(() => {
      setIsMenuOpen(false);
    }, 200);
  };

  // Update body overflow based on menu state
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "auto";
    }

    // Cleanup: Reset overflow when component unmounts or isMenuOpen changes
    return () => {
      document.body.style.overflowY = "auto";
    };
  }, [isMenuOpen]);

  return (
    <header className="fixed z-50 w-full max-w-[1920px] bg-white py-[17px] md:absolute md:top-[34px] md:bg-transparent md:px-0 md:py-0">
      <div className="mx-auto flex max-w-screen-xl items-center justify-between px-5">
        <Link href="/" onClick={closeMenu}>
          <h1 className="w-[150px] md:w-[200px]">
            <Image
              src={`${nextConfig.basePath}/logo.png`}
              alt="logo"
              width={200}
              height={50}
              quality={100}
            />
          </h1>
        </Link>
        <nav>
          <div className="relative md:hidden">
            <input
              type="checkbox"
              id="menu-toggle"
              className="hidden"
              checked={isMenuOpen}
              onChange={toggleMenu}
            />
            <label
              htmlFor="menu-toggle"
              className="relative flex h-[calc(16px+20px)] w-[calc(20px+20px)] cursor-pointer flex-col justify-between bg-transparent p-[10px]"
            >
              {Array.from({ length: 3 }, (_, index) => (
                <span
                  key={index}
                  className={`block h-[2px] w-full rounded-[5px] bg-black transition-transform duration-300 ${
                    index === 0 && isMenuOpen
                      ? "translate-y-[7px] rotate-45"
                      : ""
                  } ${index === 1 && isMenuOpen ? "opacity-0" : ""} ${
                    index === 2 && isMenuOpen
                      ? "-translate-y-[7px] rotate-[-45deg]"
                      : ""
                  }`}
                ></span>
              ))}
            </label>
          </div>
          <div
            className={`absolute left-0 top-[70px] h-[calc(100vh-70px)] w-full border-t-[2px] border-mainColor bg-white px-5 pb-[20px] pt-[32px] md:static md:flex md:h-auto md:border-0 md:border-t-0 md:bg-transparent md:p-0 ${isMenuOpen ? "flex flex-col justify-between" : "hidden"}`}
          >
            <ul className={`block md:flex`}>
              {links.map((data) => (
                <li
                  key={data.name}
                  className={`nav-point relative pb-[20px] pl-[42px] align-sub md:pb-0 md:pl-[40px]`}
                >
                  <Link
                    href={data.href}
                    className="align-sub text-base md:pl-[40px]"
                    onClick={closeMenu}
                  >
                    {data.name}
                  </Link>
                </li>
              ))}
            </ul>
            <LinkButtons className={`md:hidden`} />
          </div>
        </nav>
      </div>
    </header>
  );
}
