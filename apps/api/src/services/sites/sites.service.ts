import { Injectable } from '@nestjs/common';
import {
  GetInfoResponse,
  ProductBrand,
  ProductTitle,
} from '@/apis/sites/sites.dto';
import { ScraperService } from '@/services/scraper/scraper.service';

@Injectable()
export class SitesService {
  constructor(private readonly scraperService: ScraperService) {}

  public async getInfo(id: string): Promise<GetInfoResponse | null> {
    const titles = await this.scraperService.getTitle<ProductTitle>(id);
    const brands = await this.scraperService.getBrand<ProductBrand>(id);
    const price = await this.scraperService.getPrice<number>(id);
    const interest = await this.scraperService.getInterest<number>(id);

    if (!titles || !brands) {
      return null;
    }

    return {
      title: {
        ...titles,
      },
      brand: {
        ...brands,
      },
      price,
      interest,
      imageURL: 'asd',
      siteURL: '123',
    };
  }
}
