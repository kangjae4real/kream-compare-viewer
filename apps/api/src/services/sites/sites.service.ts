import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { makeFailure, makeSuccess, Try } from '@/utils/try';
import { GetInfoResponse } from '@/apis/sites/sites.dto';
import { GET_ERROR } from '@/services/sites/errors';
import { lastValueFrom, map, Observable } from 'rxjs';
import parser from 'node-html-parser';

@Injectable()
export class SitesService {
  constructor(private readonly httpService: HttpService) {}

  public async getInfo(id: string): Promise<Try<GetInfoResponse, GET_ERROR>> {
    let fetchResult: Observable<string>;

    try {
      fetchResult = this.httpService
        .get(`https://kream.co.kr/products/${id}`)
        .pipe(map((value) => value.data));
    } catch (error) {
      return makeFailure('NOT_FOUND');
    }

    if (!fetchResult) {
      return makeFailure('NOT_FOUND');
    }

    const html = await lastValueFrom(fetchResult);
    const dom = parser.parse(html);
    const englishTitle = dom
      .querySelector('.main-title-container > .title')
      .textContent.trim();
    const koreanTitle = dom.querySelector(
      '.main-title-container > .sub-title',
    ).textContent;

    return makeSuccess({
      title: {
        english: englishTitle,
        korean: koreanTitle,
      },
      price: 12345,
      imageSrc: 'https://naver.com',
    });
  }
}
