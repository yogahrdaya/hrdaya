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
      <div className="relative flex h-[145px] items-center justify-center md:h-[400px]">
        <Image
          src={`${nextConfig.basePath}/${imageSrc}`}
          alt={title}
          fill
          className="absolute z-0 hidden object-cover object-center md:block"
          quality={100}
          priority
        />
        <Image
          src={`${nextConfig.basePath}/mo_${imageSrc}`}
          alt={title}
          fill
          className="absolute z-0 object-cover object-center md:hidden"
          quality={100}
          priority
        />
        <h2 className="relative z-10 w-full max-w-screen-xl px-5 text-[35px] md:text-visualTitle">
          {title}
        </h2>
      </div>
      <div className="mx-auto max-w-screen-xl px-5 py-[60px] md:pb-[140px] md:pt-[100px]">
        {children}
      </div>
    </main>
  );
}
