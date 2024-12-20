"use client";

import { cn } from "@evanwinter/cn";
import Link, { LinkProps } from "next/link";
import { usePathname } from "next/navigation";

export function NavLink(
  props: LinkProps & React.ComponentPropsWithoutRef<"a">,
) {
  const pathname = usePathname();
  return (
    <Link
      {...props}
      className={cn(props.className, pathname === props.href && "text-accent")}
    />
  );
}
