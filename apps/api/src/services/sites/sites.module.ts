import { Module } from '@nestjs/common';
import { SitesService } from '@/services/sites/sites.service';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [
    HttpModule.register({
      timeout: 5000,
      maxRedirects: 5,
    }),
  ],
  providers: [SitesService],
  exports: [SitesService],
})
export class SitesServiceModule {}
