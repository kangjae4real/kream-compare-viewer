import { Injectable } from '@nestjs/common';
import {
  ProductBrand,
  ProductResponse,
  ProductTitle,
} from '@/apis/sites/sites.dto';
import { ScraperService } from '@/services/scraper/scraper.service';

@Injectable()
export class SitesService {
  constructor(private readonly scraperService: ScraperService) {}

  public async getProduct(id: string): Promise<ProductResponse | null> {
    const siteURL = this.scraperService.makeURL(id);
    const titles = await this.scraperService.getTitle<ProductTitle>(id);
    const brands = await this.scraperService.getBrand<ProductBrand>(id);
    const price = await this.scraperService.getPrice<number>(id);
    const interest = await this.scraperService.getInterest<number>(id);
    const imageURL = await this.scraperService.getImageURL<string>(id);

    // NOTE: title가 없다면, NULL을 반환합니다.
    // title이 없다면 다른 데이터또한 없기 때문입니다.
    if (!titles) {
      return null;
    }

    return {
      title: titles,
      brand: brands,
      price,
      interest,
      imageURL,
      siteURL,
    };
  }
}
