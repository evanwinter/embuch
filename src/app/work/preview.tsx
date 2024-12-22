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
    <Link href={props.href} className="flex flex-col gap-4">
      <div className="flex flex-col gap-4 lg:flex-row">{props.children}</div>
      <div className="flex justify-start gap-2 border-t-[1px] pt-4 border-foreground">
        <span className="font-semibold">{props.brand}</span>
        {props.title && <span>{props.title}</span>}
        <span className="ml-auto text-foregroundMuted">
          {props.description}
        </span>
      </div>
    </Link>
  );
}
