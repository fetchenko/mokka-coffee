export function ThemePreview({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      <div className="bg-background text-foreground">
        {children}
      </div>

      <div className="dark bg-background text-foreground">
        {children}
      </div>
    </div>
  );
}