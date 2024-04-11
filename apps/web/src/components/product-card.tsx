import { cva } from "class-variance-authority";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@components/ui/card";
import { HTMLAttributes, useMemo } from "react";
import { ProductResponse } from "@/types/product";
import { cn } from "@/lib/utils";
import { Input } from "@components/ui/input";
import { Button } from "@components/ui/button";

const productCardVariants = cva("");

interface ProductCardProps extends HTMLAttributes<HTMLDivElement> {
  product?: ProductResponse;
}

const ProductCard = ({ className, product, ...props }: ProductCardProps) => {
  const header = useMemo(() => {
    if (!product) {
      return (
        <>
          <CardTitle>제품을 입력해보세요!</CardTitle>
          <CardDescription>링크나 ID를 입력해주세요.</CardDescription>
        </>
      );
    }

    const { title } = product;

    return (
      <>
        <CardTitle>{title?.english ?? "제품 영문명 파싱 실패"}</CardTitle>
        <CardDescription>{title?.korean ?? "제품 한글명 파싱 실패"}</CardDescription>
      </>
    );
  }, [product]);

  const footer = useMemo(() => {
    if (!product) {
      return <Button>확인</Button>;
    }
  }, [product]);

  return (
    <Card className={cn(productCardVariants(), className)} {...props}>
      <CardHeader>{header}</CardHeader>

      <CardContent>
        <Input placeholder="링크나 ID" />
      </CardContent>

      <CardFooter>{footer}</CardFooter>
    </Card>
  );
};

export default ProductCard;
