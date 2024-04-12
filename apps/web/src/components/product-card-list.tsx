import { cva, VariantProps } from "class-variance-authority";
import { HTMLAttributes } from "react";
import { QueryStatus } from "@tanstack/react-query";
import Loading from "@components/loading";
import { cn } from "@/lib/utils";
import { Card, CardContent, CardFooter, CardHeader } from "@components/ui/card";

const productCardListVariants = cva("");

interface ProductCardListProps<List>
  extends HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof productCardListVariants> {
  list: List[];
  queryStatus: QueryStatus;
  fetchQuery: () => void;
  render: (item: List) => React.ReactNode;
}

const loadingList = ["w-[130px] h-[16px] rounded", "w-[30px] h-[16px] rounded"];

const ProductCardList = <List,>({
  list,
  render,
  queryStatus,
  fetchQuery,
  className,
  ...props
}: ProductCardListProps<List>) => {
  return (
    <div className={cn(productCardListVariants(), className)} {...props}>
      {queryStatus === "pending" && (
        <Card>
          <CardHeader>
            <Loading list={loadingList} />
          </CardHeader>
          <CardContent className="flex flex-col gap-2">
            <Loading list={loadingList} />
          </CardContent>
          <CardFooter className="flex flex-col items-start gap-2">
            <Loading list={loadingList} />
          </CardFooter>
        </Card>
      )}
      {queryStatus === "success" && (
        <ul>
          {list.map((value, index) => (
            <li key={index}>{render(value)}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ProductCardList;
