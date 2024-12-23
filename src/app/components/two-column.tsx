import { cn } from "@evanwinter/cn";
import React from "react";

interface TwoColumnProps extends React.HTMLAttributes<HTMLDivElement> {
  colReverse?: boolean;
  span?: [number, number];
}

export function TwoColumn({ children, colReverse, span }: TwoColumnProps) {
  const [left = 6, right = 6] = span ?? [];
  const [leftChild, rightChild] = React.Children.toArray(children);

  if (React.Children.count(children) !== 2) {
    throw new Error("TwoColumn component requires exactly two children.");
  }

  if (left + right !== 10) {
    throw new Error("The sum of the span values must equal 10.");
  }

  const leftFlex = `${left * 10}%`;
  const rightFlex = `${right * 10}%`;

  return (
    <div
      className={cn(
        "flex flex-col lg:flex-row gap-12 relative",
        colReverse ?? "flex-col-reverse",
      )}
    >
      <div style={{ flexBasis: leftFlex }}>{leftChild}</div>
      <div style={{ flexBasis: rightFlex }}>{rightChild}</div>
    </div>
  );
}
