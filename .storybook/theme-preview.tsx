import { cn } from "@/lib/utils/cn";

export function ThemePreview({
  children,
  className
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      <div className={cn("p-4 bg-background text-foreground", className)}>
        {children}
      </div>

      <div className={cn("p-4 section-dark bg-background text-foreground", className)}>
        {children}
      </div>
    </div >
  );
}