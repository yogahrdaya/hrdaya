import Image from "next/image";
import nextConfig from "../../../next.config.mjs";

interface SubLayoutProps {
  children: React.ReactNode;
  imageSrc: string;
  title: string;
}

export default function SubLayout({
  children,
  imageSrc,
  title,
}: SubLayoutProps) {
  return (
    <main>
      <div className="relative h-[400px] flex justify-center items-center">
        <Image
          src={`${nextConfig.basePath}${imageSrc}`}
          alt={title}
          fill
          className="absolute z-0 object-cover object-center"
          quality={100}
          priority
        />
        <h2 className="relative z-10 max-w-screen-xl px-5 w-full text-visualTitle">
          {title}
        </h2>
      </div>
      <div className="max-w-screen-xl px-5 mx-auto pt-[100px] py-[140px]">
        {children}
      </div>
    </main>
  );
}
