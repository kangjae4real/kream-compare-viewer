import { Module } from '@nestjs/common';
import { SitesApiModule } from '@/apis/sites/sites.module';
import { RootApiModule } from '@/apis/root/root.module';

@Module({
  imports: [RootApiModule, SitesApiModule],
})
export class AppModule {}
