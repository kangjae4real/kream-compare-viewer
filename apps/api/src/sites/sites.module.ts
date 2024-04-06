import { Module } from '@nestjs/common';
import { SitesService } from '@/sites/sites.service';
import { SitesController } from '@/sites/sites.controller';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [
    HttpModule.register({
      timeout: 5000,
      maxRedirects: 5,
    }),
  ],
  controllers: [SitesController],
  providers: [SitesService],
})
export class SitesModule {}
