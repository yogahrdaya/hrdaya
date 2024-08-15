export default function Contact() {
  return (
    <div className="h-[630px] flex justify-center items-center text-center bg-[url('/main_contact.jpg')] bg-repeat bg-center bg-size-[1920px]">
      <div className="max-w-screen-xl">
        <h2 className="font-serif text-title">
          Contact <strong>Hrdaya Yoga</strong>
        </h2>
        <ul className="mt-[40px]">
          <li>
            070 4115 1080
            <br />-
          </li>
          <li>
            <a
              href="http://pf.kakao.com/_jfGxes/chat"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              카카오채널 &apos;삼송요가흐르다야&apos; 문의
            </a>
            <br />-
          </li>
          <li>
            <a
              href="https://www.instagram.com/yoga_hrdaya"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              Instagram
            </a>
            <br />-
          </li>
          <li>
            <a
              href="https://map.naver.com/p/entry/place/1951028081"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              네이버플레이스
            </a>
            <br />-
          </li>
          <li>경기도 고양시 덕양구 동송로70 218호</li>
        </ul>
      </div>
    </div>
  );
}
