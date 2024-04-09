export class ProductTitle {
  english: string;
  korean: string;
}

export class ProductBrand extends ProductTitle {}

export class GetInfoResponse {
  title: ProductTitle;
  brand: ProductBrand;
  price: number;
  interest: number;
  imageURL: string;
  siteURL: string;
}
