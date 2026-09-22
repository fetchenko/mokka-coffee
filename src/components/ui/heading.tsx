import type { ComponentProps } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils/cn";

const headingVariants = cva("font-semibold tracking-tight", {
  variants: {
    variant: {
      hero: "text-5xl leading-none",
      section: "font-display font-bold text-3xl leading-tight",
      block: "text-xl leading-6",
      eyebrow: "text-sm uppercase tracking-[0.15em] text-primary",
    },
  },
  defaultVariants: {
    variant: "section",
  },
});

type HeadingProps = ComponentProps<"h1"> &
  VariantProps<typeof headingVariants> & {
    as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  };

export function Heading({
  as: Tag = "h2",
  variant,
  className,
  ...props
}: HeadingProps) {
  return (
    <Tag className={cn(headingVariants({ variant }), className)} {...props} />
  );
}
