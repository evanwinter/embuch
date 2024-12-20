"use client";

export function Header() {
  const handlers = {
    onMouseEnter: () =>
      typeof window !== "undefined" &&
      window.document.body.classList.add("emily"),
    onMouseLeave: () =>
      typeof window !== "undefined" &&
      window.document.body.classList.remove("emily"),
  };

  return (
    <header className="flex flex-col items-start gap-2 text-sm">
      <span {...handlers}>Emily Buchberger</span>
      <span>Brand Designer</span>
      <span>Chicago, Illinois</span>
    </header>
  );
}
