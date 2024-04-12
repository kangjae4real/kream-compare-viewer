import { Heading } from "@components/heading";
import PageLayout from "@components/layouts/page-layout";
import Pad from "@components/pad";
import ProductCardList from "@components/product-card-list";
import ProductCard from "@components/product-card";

export default function IndexPage() {
  return (
    <PageLayout>
      <Heading Component="h2">크림에 올라오는 제품들을 한눈에 비교해볼 수 있습니다.</Heading>
      <Pad />
      <ProductCard />
      <ProductCardList list={[]} queryStatus="pending" fetchQuery={() => {}} render={(value) => <span>asd</span>} />
    </PageLayout>
  );
}
