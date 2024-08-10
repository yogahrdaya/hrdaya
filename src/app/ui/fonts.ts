import { Noto_Sans_KR, Noto_Serif_KR } from "next/font/google";

// Configure Noto Sans KR font
export const notoSans = Noto_Sans_KR({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

// Configure Noto Serif KR font
export const notoSerif = Noto_Serif_KR({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});
