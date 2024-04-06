import { Module } from '@nestjs/common';
import { CommonModule } from '@/common/common.module';
import { SitesModule } from '@/sites/sites.module';

@Module({
  imports: [CommonModule, SitesModule],
})
export class AppModule {}
