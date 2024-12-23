"use client";

import Image from "next/image";
import Flower from "@/public/Flower-2.png";
import { NavLink } from "@/app/components/nav-link";

import { usePathname } from "next/navigation";
import { cn } from "@evanwinter/cn";
import Link from "next/link";

export function Sidebar(
  props: React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLElement>,
    HTMLElement
  >,
) {
  const pathname = usePathname();
  const expandWork = pathname.includes("/work");

  return (
    <div className={cn(props.className, "min-w-[184px]")}>
      <div className="flex flex-col gap-10 items-start min-w-min shrink-0">
        <Link
          href="/"
          className="bg-accent img-link relative w-full max-w-[120px]"
        >
          <Image
            src={Flower}
            alt="Picture of flower"
            className="grayscale w-full"
          />
          <div className="absolute inset-0 bg-accent mix-blend-overlay" />
        </Link>
        <nav className="grid gap-5 text-lg leading-none">
          <NavLink href="/">Home</NavLink>
          <NavLink href="/work">Work</NavLink>

          {expandWork && (
            <div className="grid gap-2 text-xs pl-4 border-0 border-l-2 border-accent">
              <NavLink href="/work/vestwell/mobile-app-launch">
                Mobile App Launch
              </NavLink>
              <NavLink href="/work/vestwell/brand-collateral">
                Brand Collateral
              </NavLink>
              <NavLink href="/work/vestwell/social-and-email-graphics">
                Social &amp; Email Graphics
              </NavLink>
              <NavLink href="/work/vestwell/blog-redesign">
                Blog Redesign
              </NavLink>
              <NavLink href="/work/vestwell/conference-booth">
                Conference Booth
              </NavLink>
              <NavLink href="/work/american-cancer-society">
                American Cancer Society
              </NavLink>
              <NavLink href="/work/hlk">HLK</NavLink>
            </div>
          )}
          <NavLink href="/about">About</NavLink>
        </nav>
      </div>
    </div>
  );
}
