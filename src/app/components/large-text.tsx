import { cn } from "@evanwinter/cn";

interface LargeTextProps {
  children: React.ReactNode;
  className?: string;
}

export const LargeText = ({ children, className }: LargeTextProps) => {
  return (
    <p className={cn("text-lg leading-snug mb-2", className)}>{children}</p>
  );
};
