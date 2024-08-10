import { Noto_Sans_KR, Noto_Serif_KR } from "next/font/google";

const sumClass = (...classnames: string[]) => {
  return classnames.join(" ");
};

// Configure Noto Sans KR font
const notoSans = Noto_Sans_KR({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
  variable: "--noto_sans_kr",
});

// Configure Noto Serif KR font
const notoSerif = Noto_Serif_KR({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
  variable: "--noto_serif_kr",
});

export const fontClassNames = sumClass(notoSans.variable, notoSerif.variable);
