import Link from "next/link";

export function SideNav() {
  return (
    <nav className="grid gap-4 text-lg">
      <Link href="/">Home</Link>
      <Link href="/work">Work</Link>
      <div className="grid gap-2 text-sm pl-4 border-0 border-l-2 border-accent">
        <Link href="/work/template">Template</Link>
        <Link href="/work/vestwell">Vestwell</Link>
        <Link href="/work/american-cancer-society">
          American Cancer Society
        </Link>
        <Link href="/work/hlk">HLK</Link>
        <Link href="/work/leo-96-collective">Leo 96 Collective</Link>
      </div>
      {/* <Link href="/fun">Fun</Link> */}
      <Link href="/contact">Contact</Link>
    </nav>
  );
}
