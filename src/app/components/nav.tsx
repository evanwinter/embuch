"use client";

import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import Dog from "@/app/public/dog.jpg";
import Mockup from "@/app/public/mockup.jpg";
import { Reveal } from "./Reveal";
import { motion, Variants } from "motion/react";

const variants: Variants = {
  offscreen: { opacity: 0, y: 12 },
  onscreen: { opacity: 1, y: 0 },
};

const images = {
  dog: { image: Dog, alt: "Dog Illustration" },
  mockup: { image: Mockup, alt: "App Mockup" },
};

export function Nav() {
  const [index, setIndex] = useState<string | null>(null);

  return (
    <div className="flex flex-col gap-6 relative">
      <div className="w-[361px] h-[192px]">
        <motion.div
          initial="offscreen"
          animate={index !== null ? "onscreen" : undefined}
          transition={{ duration: 0.2 }}
          variants={variants}
        >
          <Image
            width={361}
            height={192}
            src={images.mockup.image}
            alt={images.mockup.alt}
            quality={100}
          />
        </motion.div>
      </div>

      <nav className="border-t border-t-foreground flex gap-32 pt-6 text-base">
        <Link
          className="p-4 -m-4"
          href="/work"
          onMouseEnter={() => setIndex("mockup")}
          onMouseLeave={() => setIndex(null)}
        >
          Work
        </Link>
        <Link
          className="p-4 -m-4"
          href="/about"
          onMouseLeave={() => setIndex(null)}
        >
          About
        </Link>
      </nav>
    </div>
  );
}
