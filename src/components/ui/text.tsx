import type { ComponentProps } from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils/cn";

const textVariants = cva("text-base leading-6", {
  variants: {
    variant: {
      body: "text-muted-foreground",
      small: "text-sm leading-5",
    },
  },
  defaultVariants: {
    variant: "body",
  },
});

type TextProps = ComponentProps<"p"> &
  VariantProps<typeof textVariants> & {
    as?: "p" | "span" | "div";
  };

export function Text({
  as: Tag = "p",
  variant,
  className,
  ...props
}: TextProps) {
  return (
    <Tag className={cn(textVariants({ variant }), className)} {...props} />
  );
}
