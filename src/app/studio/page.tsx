import Image from "next/image";
import SubLayout from "../ui/subLayout";
import nextConfig from "../../../next.config.mjs";
import LinkButtons from "../ui/linkButtons";

function LayoutTop({ images }: { images: number[] }) {
  return (
    <div className="mt-[20px] flex flex-col gap-[20px] md:flex-row">
      <div className="relative h-[calc(100vw*1.32)] w-full md:h-[600px] md:max-w-[400px]">
        <Image
          src={`${nextConfig.basePath}/studio_0${images[0]}.jpg`}
          fill
          alt={`흐르다야 스튜디오 ${images[0]}번째 이미지`}
          quality={100}
          className="object-cover"
        />
      </div>
      <div className="relative h-[calc(100vw*0.6)] w-full md:h-[546px] md:max-w-[820px]">
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
    <div className="mt-[20px] flex flex-col gap-[20px] md:mt-[-34px] md:flex-row md:items-end">
      <div className="relative h-[calc(100vw*0.6)] w-full md:h-[546px] md:max-w-[820px]">
        <Image
          src={`${nextConfig.basePath}/studio_0${images[0]}.jpg`}
          fill
          alt={`흐르다야 스튜디오 ${images[0]} 이미지`}
          quality={100}
          className="object-cover"
        />
      </div>
      <div className="relative h-[calc(100vw*1.32)] w-full md:h-[600px] md:max-w-[400px]">
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
    <SubLayout imageSrc="studio_kv.jpg" title="스튜디오 소개">
      <div className="flex w-full items-center justify-between border-black md:border-t md:pt-[43px]">
        <h3 className="text-[26px] md:text-title">
          <p className="font-bold">
            <span className="font-serif">HRDAYA YOGA</span> 스튜디오
          </p>
        </h3>
        <div className="hidden md:block">
          <LinkButtons />
        </div>
      </div>

      <div className="mt-[30px] md:mt-[93px]">
        <LayoutTop images={[1, 2]} />
        <LayoutBottom images={[3, 4]} />
        <LayoutTop images={[5, 6]} />
        <LayoutBottom images={[7, 8]} />
      </div>
    </SubLayout>
  );
}
