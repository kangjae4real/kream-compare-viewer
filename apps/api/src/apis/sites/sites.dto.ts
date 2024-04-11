export class ProductTitle {
  english: string;
  korean: string;
}

export class ProductBrand extends ProductTitle {
  logo?: string;
}

export class ProductResponse {
  title?: ProductTitle;
  brand?: ProductBrand;
  price?: number;
  interest?: number;
  imageURL?: string;
  siteURL?: string;
}
