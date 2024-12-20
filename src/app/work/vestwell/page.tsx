import Image from "next/image";
import Hero from "@/app/public/hero.jpg";

export default function VestwellPage() {
  return (
    <div className="grid gap-12">
      <header className="grid grid-cols-2">
        <div>
          <h1 className="text-lg">Brand</h1>
          <h2 className="text-4xl">Project Title</h2>
        </div>
        <h3 className="text-lg">Type</h3>
      </header>

      <main className="grid grid-cols-10 gap-[40px]">
        <div className="col-span-10">
          <Image alt="hero" src={Hero} width={1200} />
        </div>
        <div className="col-span-10 text-4xl tracking-tight text-pretty">
          Campaign to announce the launch of Vestwell’s mobile app.
        </div>
      </main>
    </div>
  );
}
