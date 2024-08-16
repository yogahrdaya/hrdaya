import bgImage from "../../images/main_about.jpg";

export default function About() {
  return (
    <div
      className="flex h-[450px] items-center justify-center bg-fixed bg-center bg-repeat text-center md:h-[474px]"
      style={{
        backgroundImage: `url(${bgImage.src})`,
        backgroundSize: "1920px",
      }}
    >
      <div className="max-w-screen-xl text-white">
        <h2 className="font-serif text-[22px] md:text-title">
          About <strong>Hrdaya Yoga</strong>
        </h2>
        <p className="mx-auto mt-[57px] w-[240px] md:mt-[40px] md:w-[280px]">
          매일매일의 작은 시도와 변화가
          <br />
          나를 더 좋은 곳으로 데려갑니다.
          <br />
          <br />
          요가명상을 통해 삶을 더 생기있고 풍부하게 경험하세요.
          <br />
          <br />
          열정과 전문성을 갖춘 좋은 강사님들과 쉽고 재미있게 요가를 배우실 수
          있습니다.
        </p>
      </div>
    </div>
  );
}
