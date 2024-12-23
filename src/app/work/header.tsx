interface WorkHeaderProps {
  brand: string;
  title: string;
  types: string;
}

export function WorkHeader(props: WorkHeaderProps) {
  return (
    <header className="flex flex-col md:flex-row gap-2 md:gap-12 mb-8 md:mb-0">
      <div className="w-full flex flex-col gap-2">
        <h1 className="text-base md:text-lg">{props.brand}</h1>
        <h2 className="text-pretty leading-tight text-2xl sm:text-4xl max-w-[25ch]">
          {props.title}
        </h2>
      </div>
      <h3 className="text-lg place-self-start md:place-self-end text-right shrink-0 text-foregroundMuted">
        {props.types}
      </h3>
    </header>
  );
}
