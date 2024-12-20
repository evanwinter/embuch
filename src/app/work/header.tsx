interface WorkHeaderProps {
  brand: string;
  title: string;
  types: string;
}

export function WorkHeader(props: WorkHeaderProps) {
  return (
    <header className="grid grid-cols-2">
      <div className="grid gap-2">
        <h1 className="text-lg">{props.brand}</h1>
        <h2 className="leading-tight text-2xl md:text-4xl">{props.title}</h2>
      </div>
      <h3 className="text-lg place-self-end">{props.types}</h3>
    </header>
  );
}
