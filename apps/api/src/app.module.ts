import { Module } from '@nestjs/common';
import { SitesApiModule } from '@/apis/sites/sites.module';

@Module({
  imports: [SitesApiModule],
})
export class AppModule {}
