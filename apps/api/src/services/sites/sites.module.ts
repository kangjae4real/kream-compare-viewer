import { Module } from '@nestjs/common';
import { SitesService } from '@/services/sites/sites.service';
import { ScraperServiceModule } from '@/services/scraper/scraper.module';

@Module({
  imports: [ScraperServiceModule],
  providers: [SitesService],
  exports: [SitesService],
})
export class SitesServiceModule {}
