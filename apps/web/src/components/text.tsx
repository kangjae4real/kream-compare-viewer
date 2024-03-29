import { cva, VariantProps } from "class-variance-authority";
import { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

const textVariants = cva("", {
  variants: {
    variant: {
      p: "leading-7",
      blockquote: "border-l-2 pl-6 italic",
      inlineCode: "relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold",
      lead: "text-xl text-muted-foreground",
      muted: "text-sm text-muted-foreground",
    },
    size: {
      sm: "text-sm font-medium leading-none",
      lg: "text-lg font-semibold",
    },
  },
});

interface TextProps<ElementType> extends HTMLAttributes<ElementType>, VariantProps<typeof textVariants> {}

export const Paragraph = ({ children, ...props }: TextProps<HTMLParagraphElement>) => {
  return (
    <p className={cn(textVariants({ variant: "p" }))} {...props}>
      {children}
    </p>
  );
};

export const Blockquote = ({ children, ...props }: TextProps<HTMLQuoteElement>) => {
  return (
    <blockquote className={cn(textVariants({ variant: "blockquote" }))} {...props}>
      {children}
    </blockquote>
  );
};

export const InlineCode = ({ children, ...props }: TextProps<HTMLBaseElement>) => {
  return (
    <code className={cn(textVariants({ variant: "inlineCode" }))} {...props}>
      {children}
    </code>
  );
};

export const Lead = ({ children, ...props }: TextProps<HTMLParagraphElement>) => {
  return (
    <p className={cn(textVariants({ variant: "lead" }))} {...props}>
      {children}
    </p>
  );
};

export const Muted = ({ children, ...props }: TextProps<HTMLParagraphElement>) => {
  return (
    <p className={cn(textVariants({ variant: "muted" }))} {...props}>
      {children}
    </p>
  );
};

export const Small = ({ children, ...props }: TextProps<HTMLParagraphElement>) => {
  return (
    <p className={cn(textVariants({ size: "sm" }))} {...props}>
      {children}
    </p>
  );
};

export const Large = ({ children, ...props }: TextProps<HTMLParagraphElement>) => {
  return (
    <p className={cn(textVariants({ size: "lg" }))} {...props}>
      {children}
    </p>
  );
};
