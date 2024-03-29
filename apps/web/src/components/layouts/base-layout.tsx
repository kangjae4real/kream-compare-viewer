import { HTMLAttributes } from "react";
import { cva, VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

export const baseLayoutVariants = cva("mx-auto h-full", {
  variants: {
    size: {
      default: "max-w-[1000px]",
      fullWidth: "w-full",
    },
  },
  defaultVariants: {
    size: "default",
  },
});

interface BaseLayoutProps extends HTMLAttributes<HTMLDivElement>, VariantProps<typeof baseLayoutVariants> {}

const BaseLayout = ({ children, size, ...props }: BaseLayoutProps) => {
  return (
    <div className={cn(baseLayoutVariants({ size }))} {...props}>
      <div className="h-full w-full">{children}</div>
    </div>
  );
};

export default BaseLayout;
