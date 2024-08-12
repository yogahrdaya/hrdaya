import About from "./ui/main/about";
import Classes from "./ui/main/classes";
import Contact from "./ui/main/contact";
import KeyVisual from "./ui/main/keyVisual";

export default function Home() {
  return (
    <main>
      <KeyVisual />
      <About />
      <Classes />
      <Contact />
      <h1 className="font-sans">noto sans</h1>
      <p className="font-serif">noto serif</p>
    </main>
  );
}
