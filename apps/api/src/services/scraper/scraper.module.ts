import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { ScraperService } from '@/services/scraper/scraper.service';

@Module({
  imports: [
    HttpModule.register({
      timeout: 5000,
      maxRedirects: 5,
      baseURL: 'https://kream.co.kr',
    }),
  ],
  providers: [ScraperService],
  exports: [ScraperService],
})
export class ScraperServiceModule {}
