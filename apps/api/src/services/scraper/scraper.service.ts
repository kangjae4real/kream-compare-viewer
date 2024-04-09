import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { catchError, lastValueFrom, map } from 'rxjs';
import parser from 'node-html-parser';

@Injectable()
export class ScraperService {
  constructor(private readonly httpService: HttpService) {}

  private productURL = `/products`;

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

  public makeURL(id: string, targetURL?: `/${string}`): string {
    return `${targetURL ?? this.productURL}/${id}`;
  }

  public async getTitle<ReturnType>(
    id: string,
    targetURL?: `/${string}`,
  ): Promise<ReturnType | null> {
    const dom = await this.makeDOM(id, targetURL);
    let english;
    let korean;

    try {
      english = dom
        .querySelector('.main-title-container > .title')
        .textContent.trim();
      korean = dom.querySelector(
        '.main-title-container > .sub-title',
      ).textContent;
    } catch (error) {
      if (error) {
        english = null;
        korean = null;
      }
    }

    if (!english || !korean) {
      return null;
    }

    return {
      english,
      korean,
    } as ReturnType;
  }

  public async getBrand<ReturnType>(
    id: string,
    targetURL?: `/${string}`,
  ): Promise<ReturnType | null> {
    const dom = await this.makeDOM(id, targetURL);
    let english;
    let korean;

    try {
      english = dom.querySelector(
        '.brand-shortcut .title > .title-text',
      ).textContent;
      korean = dom.querySelector(
        '.brand-shortcut .subtitle-wrap > .subtitle',
      ).textContent;
    } catch (error) {
      if (error) {
        english = null;
        korean = null;
      }
    }

    if (!english || !korean) {
      return null;
    }

    return {
      english,
      korean,
    } as ReturnType;
  }

  public async getPrice<ReturnType>(
    id: string,
    targetURL?: `/${string}`,
  ): Promise<ReturnType | null> {
    const dom = await this.makeDOM(id, targetURL);
    let price;

    try {
      price = parseInt(
        dom
          .querySelector('.price-text-container > .price')
          .textContent.replace(',', '')
          .replace('원', ''),
        10,
      );
    } catch (error) {
      if (error) {
        price = null;
      }
    }

    if (!price) {
      return null;
    }

    return price as ReturnType;
  }

  public async getInterest<ReturnType>(
    id: string,
    targetURL?: `/${string}`,
  ): Promise<ReturnType | null> {
    const dom = await this.makeDOM(id, targetURL);
    let interest;

    try {
      interest = parseInt(
        dom.querySelector('.wish_count_num').textContent.replace(',', ''),
        10,
      );
    } catch (error) {
      if (error) {
        interest = null;
      }
    }

    if (!interest) {
      return null;
    }

    return interest as ReturnType;
  }

  public async getImageURL<ReturnType>(
    id: string,
    targetURL?: `/${string}`,
  ): Promise<ReturnType | null> {
    const dom = await this.makeDOM(id, targetURL);
    let imageURL;

    try {
      imageURL = dom.querySelector('.product_img > .image').getAttribute('src');
    } catch (error) {
      if (error) {
        imageURL = null;
      }
    }

    if (!imageURL) {
      return null;
    }

    return imageURL as ReturnType;
  }
}
