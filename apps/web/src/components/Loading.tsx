import { cva, VariantProps } from "class-variance-authority";
import { CSSProperties, HTMLAttributes, useMemo } from "react";
import { Skeleton } from "@components/ui/skeleton";
import { cn } from "@/lib/utils";

const loadingVariants = cva("");

interface LoadingProps extends Omit<HTMLAttributes<HTMLDivElement>, "children">, VariantProps<typeof loadingVariants> {
  list: string[];
  options?: {
    direction?: CSSProperties["flexDirection"];
    className?: string;
  };
}

const Loading = ({ list, options, ...props }: LoadingProps) => {
  const elems = useMemo(() => {
    return list.map((classValue, index) => <Skeleton key={index} className={classValue} {...props} />);
  }, [list, props]);

  if (!options) {
    return elems;
  }

  return (
    <div className={cn("w-full", options?.className, options?.direction === "row" ? "flex-row" : "flex-col")}>
      {elems}
    </div>
  );
};

export default Loading;
