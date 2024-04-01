import { cva, VariantProps } from "class-variance-authority";
import { HTMLAttributes } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@components/ui/card";
import { Button } from "@components/ui/button";
import { cn } from "@/lib/utils";

const productCardVariants = cva("");

interface ProductCardProps
  extends Omit<HTMLAttributes<HTMLDivElement>, "children">,
    VariantProps<typeof productCardVariants> {}

const ProductCard = ({ className, ...props }: ProductCardProps) => {
  return (
    <Card className={cn(productCardVariants(), className)} {...props}>
      <CardHeader>
        <CardTitle>IAB Studio Hoodie Deep Green</CardTitle>
        <CardDescription>아이앱 스튜디오 후드 딥 그린</CardDescription>
      </CardHeader>

      <CardContent>
        <p>Mock Data 입니다.Mock Data 입니다.Mock Data 입니다.Mock Data 입니다.Mock Data 입니다.</p>
      </CardContent>

      <CardFooter>
        <Button variant="outline">취소</Button>
        <Button>확인</Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
