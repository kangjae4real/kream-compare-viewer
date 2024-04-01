import { cva, VariantProps } from "class-variance-authority";
import { HTMLAttributes } from "react";

const productCardListVariants = cva("");

interface ProductCardListProps<List>
  extends Omit<HTMLAttributes<HTMLUListElement>, "children">,
    VariantProps<typeof productCardListVariants> {
  list: List[];
  render: (item: List) => React.ReactNode;
}

const ProductCardList = <List,>({ list, render }: ProductCardListProps<List>) => {};

export default ProductCardList;
