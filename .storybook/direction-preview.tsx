export function DirectionPreview({ children }: { children: React.ReactNode }) {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      <div className="flex flex-wrap gap-2 p-4">{children}</div>

      <div className="flex flex-col gap-2 p-4">{children}</div>
    </div>
  );
}
