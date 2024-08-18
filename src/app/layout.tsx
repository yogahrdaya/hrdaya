import type { Metadata } from "next";
import "./globals.css";
import { fontClassNames } from "./ui/fonts";
import Head from "next/head";
import Header from "./ui/header";
import Footer from "./ui/footer";
import nextConfig from "../../next.config.mjs";

export const metadata: Metadata = {
  title: "Hrdaya Yoga",
  description: "마음의 중심을 찾는 공간, 흐르다야요가",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <title>My Page Title</title>
        <meta property="og:title" content="Hrdaya Yoga" />
        <meta
          property="og:description"
          content="마음의 중심을 찾는 공간, 흐르다야요가"
        />
        <meta
          property="og:image"
          content={`${nextConfig.basePath}/og-image.png`}
        />
        <meta property="og:url" content="http://hrdaya.co.kr/" />
        <meta property="og:type" content="website" />
        <meta property="og:image:width" content="400" />
        <meta property="og:image:height" content="209" />
      </Head>
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
