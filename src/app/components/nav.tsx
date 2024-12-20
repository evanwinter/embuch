"use client";

import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import Dog from "@/app/public/dog.jpg";
import Mockup from "@/app/public/mockup.jpg";

const images = [
  { image: Dog, alt: "Dog Illustration" },
  { image: Mockup, alt: "App Mockup" },
];

export function Nav() {
  const [index, setIndex] = useState<number | null>(null);

  return (
    <div className="flex flex-col gap-6 relative">
      <div className="w-[361px] h-[192px]">
        {index !== null && (
          <Image
            width={361}
            height={192}
            src={images[index].image}
            alt={images[index].alt}
            quality={100}
          />
        )}
      </div>

      <nav className="border-t border-t-foreground flex gap-32 pt-6 text-sm">
        <Link
          className="p-4 -m-4"
          href="/work"
          onMouseEnter={() => setIndex(1)}
          onMouseLeave={() => setIndex(null)}
        >
          Work
        </Link>
        <Link
          className="p-4 -m-4"
          href="/contact"
          onMouseLeave={() => setIndex(null)}
        >
          Contact
        </Link>
      </nav>
    </div>
  );
}
