import { cn } from "@evanwinter/cn";
import { MASK_WIDTH } from "./constants";

export const Blue = ({
  className,
}: React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>) => (
  <div
    style={{ width: MASK_WIDTH }}
    className={cn("bg-accent h-full", className)}
  />
);
