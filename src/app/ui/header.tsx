import Link from "next/link";

const links = [
  { name: "대표원장 소개", href: "/about" },
  { name: "프로그램 소개", href: "/program" },
  { name: "스튜디오 소개", href: "/studio" },
];

export default function Header() {
  return (
    <header className="fixed top-[34px] w-full z-10">
      <div className="max-w-screen-xl mx-auto flex justify-between px-5">
        <Link href="/">
          <h1>흐르다야요가</h1>
        </Link>
        <nav>
          <ul className="flex">
            {links.map((link) => (
              <li>
                <Link key={link.name} href={link.href} className="pl-[40px]">
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
