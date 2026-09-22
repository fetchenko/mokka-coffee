import { cn } from "@/lib/utils/cn";

type ContainerProps = React.ComponentProps<"div">;

export function Container({ className, ...props }: ContainerProps) {
  return (
    <div
      className={cn(
        "mx-auto w-full max-w-7xl px-8 py-4 md:px-6 md:py-8 lg:px-8",
        className,
      )}
      {...props}
    />
  );
}
