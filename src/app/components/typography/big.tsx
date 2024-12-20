interface BigTextProps {
  children: React.ReactNode;
}

export function BigText(props: BigTextProps) {
  return (
    <p className="text-4xl tracking-tight text-pretty">{props.children}</p>
  );
}
