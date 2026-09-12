import { cn } from "@/lib/utils/classnames";
import { cva, type VariantProps } from "class-variance-authority";

const buttonVariants = cva(
  [
    "inline-flex items-center justify-center gap-2",
    "whitespace-nowrap rounded-sm",
    "font-sans uppercase",
    "transition-colors",
    "disabled:pointer-events-none disabled:opacity-50",
    "[&_svg]:pointer-events-none [&_svg]:shrink-0",
  ],
  {
    variants: {
      variant: {
        primary: [
          "bg-button-primary",
          "text-button-primary-text",
        ],
        outline: [
          "border",
          "border-button-outline-border",
          "bg-button-outline",
          "text-button-outline-text",
        ],
        "outline-inverse": [
          "border",
          "border-button-outline-inverse-border",
          "bg-button-outline-inverse",
          "text-button-outline-inverse-text",
        ],
      },
      size: {
        default: "h-12 px-5 py-2",
        sm: "h-9 px-4",
        lg: "h-11 px-8",
        icon: "size-10 rounded-full",
      },
    },

    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
  VariantProps<typeof buttonVariants> { }

function Button({
  className,
  variant,
  size,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };