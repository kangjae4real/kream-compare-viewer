import { Module } from '@nestjs/common';
import { SitesController } from '@/apis/sites/sites.controller';
import { SitesServiceModule } from '@/services/sites/sites.module';

@Module({
  imports: [SitesServiceModule],
  controllers: [SitesController],
})
export class SitesApiModule {}
