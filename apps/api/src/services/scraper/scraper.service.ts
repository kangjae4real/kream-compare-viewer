import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { catchError, lastValueFrom, map } from 'rxjs';
import parser from 'node-html-parser';

@Injectable()
export class ScraperService {
  constructor(private readonly httpService: HttpService) {}

  private productURL = `/products`;

  private makeURL(id: string, targetURL?: `/${string}`): string {
    return `${targetURL ?? this.productURL}/${id}`;
  }

  private async makeDOM(
    id: string,
    targetURL?: `/${string}`,
  ): Promise<HTMLElement | null> {
    const URL = this.makeURL(id, targetURL);
    const html = await lastValueFrom(
      this.httpService.get(URL).pipe(
        map((value) => value.data),
        catchError(() => 'NOT_FOUND'),
      ),
    );

    if (!html || html === 'NOT_FOUND') {
      return null;
    }

    return parser.parse(html) as unknown as HTMLElement;
  }

  public async getTitle<ReturnType>(
    id: string,
    targetURL?: `/${string}`,
  ): Promise<ReturnType | null> {
    const dom = await this.makeDOM(id, targetURL);

    const englishTitle = dom
      .querySelector('.main-title-container > .title')
      .textContent.trim();
    const koreanTitle = dom.querySelector(
      '.main-title-container > .sub-title',
    ).textContent;

    if (!englishTitle || !koreanTitle) {
      return null;
    }

    return {
      english: englishTitle,
      korean: koreanTitle,
    } as ReturnType;
  }

  public async getBrand<ReturnType>(
    id: string,
    targetURL?: `/${string}`,
  ): Promise<ReturnType | null> {
    const dom = await this.makeDOM(id, targetURL);

    const englishBrand = dom.querySelector(
      '.brand-shortcut .title > .title-text',
    ).textContent;
    const koreanBrand = dom.querySelector(
      '.brand-shortcut .subtitle-wrap > .subtitle',
    ).textContent;

    if (!englishBrand || !koreanBrand) {
      return null;
    }

    return {
      english: englishBrand,
      korean: koreanBrand,
    } as ReturnType;
  }

  public async getPrice<ReturnType>(
    id: string,
    targetURL?: `/${string}`,
  ): Promise<ReturnType | null> {
    const dom = await this.makeDOM(id, targetURL);

    const price = parseInt(
      dom
        .querySelector('.price-text-container > .price')
        .textContent.replace(',', '')
        .replace('원', ''),
      10,
    );

    return price as ReturnType;
  }

  public async getInterest<ReturnType>(
    id: string,
    targetURL?: `/${string}`,
  ): Promise<ReturnType | null> {
    const dom = await this.makeDOM(id, targetURL);

    const interest = parseInt(
      dom.querySelector('.wish_count_num').textContent.replace(',', ''),
      10,
    );

    return interest as ReturnType;
  }
}
