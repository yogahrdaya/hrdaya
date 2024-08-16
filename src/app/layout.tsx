import type { Metadata } from "next";
import "./globals.css";
import { fontClassNames } from "./ui/fonts";
import Header from "./ui/header";
import Footer from "./ui/footer";

export const metadata: Metadata = {
  title: "Hrdaya yoga",
  description: "마음의 중심을 찾는 공간, 흐르다야요가",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${fontClassNames} md:mx-auto md:max-w-[1920px]`}>
        <Header />
        <div className="pt-[70px] font-sans text-[14px] md:pt-0 md:text-[16px]">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
