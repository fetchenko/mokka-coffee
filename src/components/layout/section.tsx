import { cn } from "@/lib/utils/cn";

type SectionProps = React.ComponentProps<"section"> & {
  tone?: "light" | "dark";
};

export function Section({ tone = "light", className, ...props }: SectionProps) {
  return (
    <section
      className={cn(
        "bg-background text-foreground",
        `section-${tone}`,
        className,
      )}
      {...props}
    />
  );
}
