import { Header } from "./components/header";
import { Marquee } from "./components/marquee";
import { Nav } from "./components/nav";

export default function Home() {
  return (
    <>
      <div className="h-full flex flex-col justify-between p-8">
        <Header />
        <Nav />
      </div>
      <div className="absolute left-0 top-[16vh] overflow-hidden">
        <Marquee />
      </div>
    </>
  );
}
