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
      <body className={`${fontClassNames} mx-auto max-w-[1920px]`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
