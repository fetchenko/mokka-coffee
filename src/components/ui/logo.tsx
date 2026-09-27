type LogoProps = {
  subtitle: string;
};

export function Logo({ subtitle }: LogoProps) {
  return (
    <span>
      <span className="block font-sans text-2xl leading-none tracking-[0.12em]">
        MOKKA
      </span>
      <span className="text-muted-foreground mt-1 block text-[0.5rem] tracking-[0.2em] uppercase">
        {subtitle}
      </span>
    </span>
  );
}
