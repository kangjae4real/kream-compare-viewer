import { HTMLAttributes } from "react";
import { cva, VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const headingVariants = cva("scroll-m-20 tracking-tight", {
  variants: {
    variant: {
      h1: "text-4xl lg:text-5xl font-extrabold ",
      h2: "text-3xl font-semibold",
      h3: "text-2xl font-semibold",
      h4: "text-xl font-semibold",
    },
  },
});

export type HeadingType = "h1" | "h2" | "h3" | "h4";
interface HeadingProps extends HTMLAttributes<HTMLHeadingElement>, VariantProps<typeof headingVariants> {
  Component: HeadingType;
}

export const Heading = ({ Component, children, ...props }: HeadingProps) => {
  return (
    <Component className={cn(headingVariants({ variant: Component }))} {...props}>
      {children}
    </Component>
  );
};
