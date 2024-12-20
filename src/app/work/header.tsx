interface WorkHeaderProps {
  brand: string;
  title: string;
  types: string;
}

export function WorkHeader(props: WorkHeaderProps) {
  return (
    <header className="flex gap-12">
      <div className="w-full flex flex-col gap-2">
        <h1 className="text-lg">{props.brand}</h1>
        <h2 className="leading-tight text-2xl md:text-4xl max-w-[25ch]">
          {props.title}
        </h2>
      </div>
      <h3 className="text-lg place-self-end text-right">{props.types}</h3>
    </header>
  );
}
