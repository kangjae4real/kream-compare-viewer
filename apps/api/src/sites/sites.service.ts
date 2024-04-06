import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { lastValueFrom, map } from 'rxjs';
import parser from 'node-html-parser';

@Injectable()
export class SitesService {
  constructor(private readonly httpService: HttpService) {}

  async findWithId(id: string) {
    const result = this.httpService
      .get(`https://kream.co.kr/products/${id}`)
      .pipe(map((response) => response.data));

    const html = await lastValueFrom(result);
    const dom = parser.parse(html);
    const englishTitle = dom
      .querySelector('.main-title-container > .title')
      .textContent.trim();
    const koreanTitle = dom.querySelector(
      '.main-title-container > .sub-title',
    ).textContent;

    return {
      englishTitle,
      koreanTitle,
    };
  }
}
