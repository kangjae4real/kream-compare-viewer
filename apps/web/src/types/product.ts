export interface ProductTitle {
  english: string;
  korean: string;
}

export interface ProductBrand extends ProductTitle {
  logo?: string;
}

export interface SitesResponse {
  title?: ProductTitle;
  brand?: ProductBrand;
  price?: number;
  interest?: number;
  imageURL?: string;
  siteURL?: string;
}
