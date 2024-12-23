import Link from "next/link";

interface WorkPreviewProps {
  children: React.ReactNode;
  brand: string;
  title?: string;
  description: string;
  href: string;
}

export function WorkPreview(props: WorkPreviewProps) {
  return (
    <Link
      href={props.href}
      className="flex flex-col gap-4 hover:text-accent img-link group"
    >
      <div className="flex flex-col gap-4 lg:flex-row">{props.children}</div>
      <div className="flex flex-col sm:flex-row justify-start gap-2 border-t-[1px] pt-4 border-current leading-none sm:leading-snug">
        <span className="font-semibold">{props.brand}</span>
        {props.title && <span>{props.title}</span>}
        <span className="sm:ml-auto text-foregroundMuted group-hover:text-accent">
          {props.description}
        </span>
      </div>
    </Link>
  );
}
