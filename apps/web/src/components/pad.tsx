import { cva, VariantProps } from "class-variance-authority";
import { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

const padVariants = cva("w-full", {
  variants: {
    size: {
      sm: "py-2",
      md: "py-4",
      lg: "py-6",
      xl: "py-8",
    },
  },
  defaultVariants: {
    size: "md",
  },
});

interface PadProps extends Omit<HTMLAttributes<HTMLDivElement>, "children">, VariantProps<typeof padVariants> {}

const Pad = ({ className, size, ...props }: PadProps) => {
  return <div className={cn(padVariants({ size }), className)} {...props} />;
};

export default Pad;
