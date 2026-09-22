import { cn } from "@/lib/utils/cn";

export function ThemePreview({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      <div className={cn("bg-background text-foreground p-4", className)}>
        {children}
      </div>

      <div
        className={cn(
          "section-dark bg-background text-foreground p-4",
          className,
        )}
      >
        {children}
      </div>
    </div>
  );
}
